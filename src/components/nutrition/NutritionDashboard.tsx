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
import { AppGlobalProps } from "../../App";

const moment = require("moment");

function Nutrition({ isMobile }: AppGlobalProps) {
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
    <Grid
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      paddingBottom={"100px"}
    >
      <FoodLogging
        isOpen={foodLogOpen}
        handleClose={() => setFoodLogOpen(false)}
        handleSubmit={handleNutritionLogging}
        title="Log Food"
        isMobile={isMobile}
      />
      <Grid
        padding={"40px 0px 20px"}
        display={"flex"}
        justifyContent={"center"}
        width={isMobile ? "100%" : "500px"}
      >
        <Grid justifyContent={"right"} width={"10%"}>
          <IconButton onClick={() => setDate(moment(date).subtract(1, "days"))}>
            <ArrowBackIos />
          </IconButton>
        </Grid>
        <Grid>
          <DatePicker
            value={moment(date)}
            format="MMMM DD, YYYY"
            sx={{
              ".MuiInputBase-root:before, .MuiInputBase-root:after": {
                borderBottom: "none",
              },

              ".MuiInputBase-root:hover:not(.Mui-disabled, .Mui-error)::before":
                {
                  borderBottom: "none",
                },

              ".MuiInputBase-input": {
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "22px",
                width: "100%",
              },
              ".MuiInputBase-root": {
                justifyContent: "center",
              },
              ".MuiInputAdornment-root": {
                width: "fit-content",
                justifyContent: "left",
              },
              padding: "0px 16px 0px 0px",
            }}
            slotProps={{
              textField: { variant: "standard" },
              openPickerButton: { color: "primary" },
            }}
            maxDate={moment()}
            onChange={(value) => setDate(value)}
          />
        </Grid>
        <Grid width={"10%"} justifyContent={"right"}>
          {formattedDate !== moment().format("DD/MM/YYYY") ? (
            <IconButton
              onClick={() => setDate(moment(date).add(1, "days"))}
              sx={{ paddingRight: "0" }}
            >
              <ArrowForwardIos />
            </IconButton>
          ) : null}
        </Grid>
      </Grid>
      <Grid
        display={"flex"}
        flexDirection={"column"}
        width={isMobile ? "90%" : "450px"}
      >
        <Grid display={"flex"} justifyContent={"space-between"}>
          <Typography fontSize={"18px"}>
            Calories In: {caloriesIn.toLocaleString()}
          </Typography>
          <Typography fontSize={"18px"}>
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
          isMobile={isMobile}
        ></NutritionSection>
        <NutritionSection
          title={"Lunch"}
          foodIntake={nutritionData?.meals.lunch ?? []}
          nutritionData={nutritionData}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          isMobile={isMobile}
        ></NutritionSection>
        <NutritionSection
          title={"Dinner"}
          foodIntake={nutritionData?.meals.dinner ?? []}
          nutritionData={nutritionData}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          isMobile={isMobile}
        ></NutritionSection>
        <NutritionSection
          title={"Snacks"}
          foodIntake={nutritionData?.meals.snacks ?? []}
          nutritionData={nutritionData}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          isMobile={isMobile}
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
  isMobile,
}: NutritionSectionsProps) => {
  return (
    <>
      <Divider
        sx={{ width: isMobile ? "100%" : "70%", borderColor: "black" }}
      />

      <Grid
        display={"flex"}
        flexDirection={"column"}
        width={isMobile ? "100%" : "70%"}
        padding={isMobile ? "4px" : "20px"}
      >
        <Grid display={"flex"} width={"100%"} alignItems={"end"}>
          <Typography
            fontSize={isMobile ? "16px" : "20px"}
            color={"primary"}
            width={isMobile ? "30%" : "40%"}
            fontWeight={"bold"}
          >
            {title}
          </Typography>

          {foodIntake.length !== 0 ? (
            <>
              <Typography
                width={isMobile ? "35%" : "25%"}
                fontSize={isMobile ? "16px" : "18px"}
                sx={{ textDecoration: "underline" }}
                textAlign={"center"}
                fontWeight={"bold"}
              >
                Serving Size
              </Typography>
              <Typography
                width={"25%"}
                fontSize={isMobile ? "16px" : "18px"}
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
                isMobile={isMobile}
              />
            ))
          ) : (
            <Typography padding={"20px"} fontSize={isMobile ? "14px" : "16px"}>
              No Food Logged
            </Typography>
          )}
        </Grid>
      </Grid>
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
  isMobile,
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
          isMobile={isMobile}
        />
      )}
      <Grid
        width={isMobile ? "30%" : "40%"}
        paddingLeft={isMobile ? "4px " : "20px"}
      >
        <Typography fontSize={isMobile ? "14px" : "16px"}>
          {foodName}
        </Typography>
      </Grid>
      <Typography
        width={isMobile ? "35%" : "25%"}
        textAlign={"center"}
        fontSize={isMobile ? "14px" : "16px"}
      >
        {servingSize}
      </Typography>
      <Typography
        width={"25%"}
        textAlign={"center"}
        fontSize={isMobile ? "14px" : "16px"}
      >
        {calories.toLocaleString()}
      </Typography>
      <Grid
        width={"10%"}
        display={"flex"}
        justifyContent={"space-evenly"}
        flexDirection={isMobile ? "column" : "row"}
      >
        <IconButton
          onClick={() => setFoodEditOpen(true)}
          size={isMobile ? "small" : "medium"}
        >
          <Edit color="primary" />
        </IconButton>
        <IconButton
          onClick={() => handleDelete(meal.toLowerCase(), findIndex())}
          size={isMobile ? "small" : "medium"}
        >
          <Delete color="primary" />
        </IconButton>
      </Grid>
    </Grid>
  );
};
