import { Button, Divider, Grid, IconButton, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import {
  FoodEntryProps,
  NutritionDashboardProps,
  NutritionSectionsProps,
} from "./NutritionDashboard.types";
import { useEffect, useState } from "react";
import { nutritionMockData } from "./NutritionDashboard.mockData";
import {
  ArrowBackIos,
  ArrowForwardIos,
  Delete,
  Edit,
} from "@mui/icons-material";
import { FoodLogging } from "../Overlays/LoggingOverlays";

const moment = require("moment");

function Nutrition() {
  const [date, setDate] = useState(moment());
  const formattedDate = date.format("DD/MM/YYYY");
  const [foodLogOpen, setFoodLogOpen] = useState(false);
  const [nutritionData, setNutritionData] = useState<NutritionDashboardProps>(
    () => {
      const todaysEntry = nutritionMockData.find(
        (entry) => entry.date === formattedDate
      );
      if (todaysEntry === undefined) {
        nutritionMockData.push({
          caloriesOut: 100,
          meals: { breakfast: [], lunch: [], dinner: [], snacks: [] },
          date: formattedDate,
        });
        return nutritionMockData.find(
          (entry) => entry.date === formattedDate
        ) as NutritionDashboardProps;
      }
      return todaysEntry;
    }
  );

  useEffect(() => {
    setNutritionData(() => {
      const todaysEntry = nutritionMockData.find(
        (entry) => entry.date === formattedDate
      );
      if (todaysEntry === undefined) {
        nutritionMockData.push({
          caloriesOut: 100,
          meals: { breakfast: [], lunch: [], dinner: [], snacks: [] },
          date: formattedDate,
        });

        return nutritionMockData.find(
          (entry) => entry.date === formattedDate
        ) as NutritionDashboardProps;
      }
      return todaysEntry;
    });
  }, [date]);

  const addCalories = (meal: string) => {
    return (nutritionData as any)?.meals[meal].reduce(
      (acc: number, entry: any) => acc + entry.calories,
      0
    );
  };

  const caloriesIn: number =
    addCalories("breakfast") +
    addCalories("lunch") +
    addCalories("dinner") +
    addCalories("snacks");

  const caloriesRemaining = (2000 - caloriesIn).toLocaleString();

  const handleNutritionLogging = (data: any) => {
    (nutritionData as any)?.meals[data.Meal.toLowerCase()].push({
      id: Math.random().toString(36).substring(2, 9),
      foodName: data["Food"],
      servingSize: data["Servings Eaten"],
      calories: data["Servings Eaten"] * data["Calories/Serving"],
    });

    setNutritionData(nutritionData);
  };

  const handleEdit = (data: any, meal: string, index: number) => {
    (nutritionData as any)["meals"][meal.toLowerCase()][index] = data;
    setNutritionData({ ...(nutritionData as any) });
  };

  const handleDelete = (meal: string, index: number) => {
    (nutritionData as any)["meals"][meal].splice(index, 1);
    setNutritionData({ ...(nutritionData as any) });
  };

  return (
    <Grid display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <FoodLogging
        isOpen={foodLogOpen}
        handleClose={() => setFoodLogOpen(false)}
        handleSubmit={handleNutritionLogging}
        title="Log Food"
      />
      <Grid padding={"40px 0px 20px"}>
        <IconButton onClick={() => setDate(moment(date).subtract(1, "days"))}>
          <ArrowBackIos />
        </IconButton>
        <DatePicker
          value={moment(date)}
          format="MMMM DD, YYYY"
          sx={{
            ".MuiInputBase-root:before, .MuiInputBase-root:after": {
              borderBottom: "none",
            },

            ".MuiInputBase-root:hover:not(.Mui-disabled, .Mui-error)::before": {
              borderBottom: "none",
            },
            ".MuiInputBase-input": {
              fontWeight: "bold",
              textAlign: "right",
              fontSize: "18px",
            },
            padding: "0px 50px 0px 25px",
          }}
          slotProps={{
            textField: { variant: "standard" },
            openPickerButton: { color: "primary" },
          }}
          maxDate={moment()}
          onChange={(value) => setDate(value)}
        />
        {formattedDate !== moment().format("DD/MM/YYYY") ? (
          <IconButton onClick={() => setDate(moment(date).add(1, "days"))}>
            <ArrowForwardIos />
          </IconButton>
        ) : null}
      </Grid>
      <Grid display={"flex"} flexDirection={"column"} padding={"20px 0px"}>
        <Grid display={"flex"} justifyContent={"space-evenly"}>
          <Typography fontSize={"18px"} padding={"0px 30px"}>
            Calories In: {caloriesIn.toLocaleString()}
          </Typography>
          <Typography fontSize={"18px"} padding={"0px 30px"}>
            Calories Out: {nutritionData?.caloriesOut}
          </Typography>
        </Grid>
        <Typography
          fontWeight={"bold"}
          textAlign={"center"}
          padding={"20px 0px"}
          fontSize={"18px"}
        >
          Calories Remaining: {caloriesRemaining}
        </Typography>
        <Button variant="contained" onClick={() => setFoodLogOpen(true)}>
          Log Food
        </Button>
      </Grid>
      <Grid
        display={"flex"}
        flexDirection={"column"}
        padding={"20px"}
        width={"100%"}
        alignItems={"center"}
      >
        <NutritionSection
          title={"Breakfast"}
          foodIntake={nutritionData?.meals.breakfast ?? []}
          nutritionData={nutritionData}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        ></NutritionSection>
        <NutritionSection
          title={"Lunch"}
          foodIntake={nutritionData?.meals.lunch ?? []}
          nutritionData={nutritionData}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        ></NutritionSection>
        <NutritionSection
          title={"Dinner"}
          foodIntake={nutritionData?.meals.dinner ?? []}
          nutritionData={nutritionData}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        ></NutritionSection>
        <NutritionSection
          title={"Snacks"}
          foodIntake={nutritionData?.meals.snacks ?? []}
          nutritionData={nutritionData}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        ></NutritionSection>
      </Grid>
    </Grid>
  );
}

export default Nutrition;

const NutritionSection = ({
  title,
  foodIntake,
  nutritionData,
  handleEdit,
  handleDelete,
}: NutritionSectionsProps) => {
  return (
    <>
      <Divider sx={{ width: "70%", borderColor: "black" }} />

      <Grid
        display={"flex"}
        flexDirection={"column"}
        width={"70%"}
        padding={"20px"}
      >
        <Grid display={"flex"} width={"100%"} alignItems={"end"}>
          <Typography
            fontSize={"20px"}
            color={"primary"}
            width={"40%"}
            fontWeight={"bold"}
          >
            {title}
          </Typography>

          {foodIntake.length !== 0 ? (
            <>
              <Typography
                width={"25%"}
                fontSize={"18px"}
                sx={{ textDecoration: "underline" }}
                textAlign={"center"}
                fontWeight={"bold"}
              >
                Serving Size
              </Typography>
              <Typography
                width={"25%"}
                fontSize={"18px"}
                sx={{ textDecoration: "underline" }}
                textAlign={"center"}
                fontWeight={"bold"}
              >
                Calories
              </Typography>
            </>
          ) : null}
        </Grid>
        <Grid display={"flex"} flexDirection={"column"}>
          {foodIntake.length !== 0 ? (
            foodIntake.map((entry) => (
              <FoodEntry
                id={entry.id}
                foodName={entry.foodName}
                meal={title}
                servingSize={entry.servingSize}
                calories={entry.calories}
                key={entry.foodName}
                nutritionData={nutritionData}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <Typography padding={"20px"}>No Food Logged</Typography>
          )}
        </Grid>
      </Grid>
      <Divider sx={{ width: "70%", borderColor: "black" }} />
    </>
  );
};

const FoodEntry = ({
  id,
  foodName,
  meal,
  servingSize,
  calories,
  nutritionData,
  handleEdit,
  handleDelete,
}: FoodEntryProps) => {
  const [foodEditOpen, setFoodEditOpen] = useState(false);

  const findIndex = () => {
    return (nutritionData as any).meals[meal.toLowerCase()].findIndex(
      (entry: any) => entry.id === id
    );
  };

  const handleEditFood = (data: any) => {
    const entry = {
      id: id,
      foodName: data["Food"],
      servingSize: data["Servings Eaten"],
      calories: Math.floor(data["Servings Eaten"] * data["Calories/Serving"]),
    };

    handleEdit(entry, meal, findIndex());
  };

  return (
    <Grid display={"flex"} padding={"16px 0px"} alignItems={"center"}>
      {foodEditOpen && (
        <FoodLogging
          isOpen={foodEditOpen}
          handleClose={() => setFoodEditOpen(false)}
          handleSubmit={handleEditFood}
          title="Edit Food"
          existingData={{
            ["Food"]: foodName,
            ["Meal"]: meal?.toLowerCase(),
            ["Calories/Serving"]: Math.floor(calories / servingSize),
            ["Servings Eaten"]: servingSize,
          }}
        />
      )}
      <Grid width={"40%"} paddingLeft={"20px"}>
        <Typography>{foodName}</Typography>
      </Grid>
      <Typography width={"25%"} textAlign={"center"}>
        {servingSize}
      </Typography>
      <Typography width={"25%"} textAlign={"center"}>
        {calories.toLocaleString()}
      </Typography>
      <Grid width={"10%"} display={"flex"} justifyContent={"space-evenly"}>
        <IconButton onClick={() => setFoodEditOpen(true)}>
          <Edit color="primary" />
        </IconButton>
        <IconButton
          onClick={() => handleDelete(meal.toLowerCase(), findIndex())}
        >
          <Delete color="primary" />
        </IconButton>
      </Grid>
    </Grid>
  );
};
