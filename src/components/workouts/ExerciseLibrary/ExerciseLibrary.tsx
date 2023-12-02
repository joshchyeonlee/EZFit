import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import SearchBar from "../../utils/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { exerciseLibraryMockData } from "./ExerciseLibrary.mockData";
import { Exercise, muscleGroup } from "./ExerciseLibrary.types";
import { ChangeEvent, useEffect, useState } from "react";
import { AppGlobalProps } from "../../../App";

const initialFilterState: muscleGroup[] = [
  "Back",
  "Biceps",
  "Cardio",
  "Chest",
  "Core",
  "Glutes",
  "Hamstrings",
  "Shoulders",
  "Triceps",
  "Quadriceps",
];

function ExerciseLibrary({ isMobile }: { isMobile: boolean }) {
  const [exerciseSearchResults, setExerciseSearchResults] = useState(
    exerciseLibraryMockData
  );

  const [exerciseFilterResults, setExerciseFilterResults] = useState(
    exerciseSearchResults
  );

  const [filters, setFilters] = useState<muscleGroup[]>(initialFilterState);
  const navigate = useNavigate();

  const letters = (() => {
    return [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  })();

  const handleSearch = (query: string) => {
    const results = exerciseLibraryMockData.filter((exercise) =>
      exercise.name.toLowerCase().includes(query)
    );
    setExerciseSearchResults(results);
  };

  const handleFilterChange = (
    event: ChangeEvent<HTMLInputElement>,
    label: muscleGroup
  ) => {
    const updatedFilters = event.target.checked
      ? [...filters, label]
      : filters.filter((filter) => filter !== label);

    setFilters(updatedFilters);
  };

  const handleFilterToggle = (state: "all" | "none") => {
    state === "all" ? setFilters(initialFilterState) : setFilters([]);
  };

  useEffect(() => {
    const results = exerciseSearchResults.filter((exercise) =>
      exercise.muscles.some((muscle) => filters.includes(muscle))
    );

    setExerciseFilterResults(results);
  }, [filters, exerciseSearchResults]);

  return (
    <Grid marginBottom={"20px"}>
      <IconButton
        color="primary"
        onClick={() => navigate("/Workouts")}
        sx={{ paddingLeft: "2%" }}
      >
        <ArrowBack sx={{ fontSize: "50px" }} />
      </IconButton>
      <Typography
        fontWeight={"bold"}
        textAlign={"center"}
        variant="h5"
        paddingBottom={"20px"}
      >
        Exercise Library
      </Typography>
      <Grid justifyContent={"center"} display={"flex"} width={"100%"}>
        <Grid width={"80%"}>
          <SearchBar
            placeholder="Search For Exercise..."
            onSearch={handleSearch}
          />
          <ExerciseFilters
            handleFilterChange={handleFilterChange}
            handleFilterToggle={handleFilterToggle}
            isMobile={isMobile}
          />
        </Grid>
      </Grid>
      <Grid display={"flex"} justifyContent={"center"}>
        <Grid width={"80%"}>
          {exerciseFilterResults.length > 0 ? (
            letters.map((letter) => (
              <ExerciseList
                letter={letter}
                currentResults={exerciseFilterResults}
                key={letter}
              />
            ))
          ) : (
            <Grid textAlign={"center"} padding={"20px"}>
              <Divider />
              <Typography padding={"20px"}>No Exercises Found</Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

interface ExerciseFiltersProps extends AppGlobalProps {
  handleFilterChange: (
    event: ChangeEvent<HTMLInputElement>,
    label: muscleGroup
  ) => void;
  handleFilterToggle: (state: "all" | "none") => void;
}

const ExerciseFilters = ({
  handleFilterChange,
  handleFilterToggle,
  isMobile,
}: ExerciseFiltersProps) => {
  const [checkedState, setCheckedState] = useState<"all" | "some" | "none">(
    "some"
  );

  const handleCheckboxChange = (event: any, label: any) => {
    handleFilterChange(event, label);
    setCheckedState("some");
  };

  return (
    <Grid display={"flex"} alignItems={"center"} flexDirection={"column"}>
      {!isMobile ? (
        <>
          <Grid display={"flex"} width={"100%"}>
            {initialFilterState.slice(0, 5).map((category) => (
              <ExerciseCheckbox
                label={category}
                handleChange={handleCheckboxChange}
                key={category}
                checkedState={checkedState}
                isMobile={isMobile}
              />
            ))}
          </Grid>
          <Grid display={"flex"} width={"100%"}>
            {initialFilterState.slice(5, 10).map((category) => (
              <ExerciseCheckbox
                label={category}
                handleChange={handleCheckboxChange}
                key={category}
                checkedState={checkedState}
                isMobile={isMobile}
              />
            ))}
          </Grid>
        </>
      ) : (
        <>
          <Grid display={"flex"} width={"100%"}>
            {initialFilterState.slice(0, 2).map((category) => (
              <ExerciseCheckbox
                label={category}
                handleChange={handleCheckboxChange}
                key={category}
                checkedState={checkedState}
                isMobile={isMobile}
              />
            ))}
          </Grid>
          <Grid display={"flex"} width={"100%"}>
            {initialFilterState.slice(2, 4).map((category) => (
              <ExerciseCheckbox
                label={category}
                handleChange={handleCheckboxChange}
                key={category}
                checkedState={checkedState}
                isMobile={isMobile}
              />
            ))}
          </Grid>
          <Grid display={"flex"} width={"100%"}>
            {initialFilterState.slice(4, 6).map((category) => (
              <ExerciseCheckbox
                label={category}
                handleChange={handleCheckboxChange}
                key={category}
                checkedState={checkedState}
                isMobile={isMobile}
              />
            ))}
          </Grid>
          <Grid display={"flex"} width={"100%"}>
            {initialFilterState.slice(6, 8).map((category) => (
              <ExerciseCheckbox
                label={category}
                handleChange={handleCheckboxChange}
                key={category}
                checkedState={checkedState}
                isMobile={isMobile}
              />
            ))}
          </Grid>
          <Grid display={"flex"} width={"100%"}>
            {initialFilterState.slice(8, 10).map((category) => (
              <ExerciseCheckbox
                label={category}
                handleChange={handleCheckboxChange}
                key={category}
                checkedState={checkedState}
                isMobile={isMobile}
              />
            ))}
          </Grid>
        </>
      )}
      <Grid
        paddingTop={"16px"}
        justifyContent={"space-evenly"}
        width={"100%"}
        display={"flex"}
      >
        <Button
          onClick={() => {
            handleFilterToggle("none");
            setCheckedState("none");
          }}
        >
          Clear All Filters
        </Button>
        <Button
          onClick={() => {
            handleFilterToggle("all");
            setCheckedState("all");
          }}
        >
          Select All Filters
        </Button>
      </Grid>
    </Grid>
  );
};

interface ExerciseCheckboxProps extends AppGlobalProps {
  label: string;
  handleChange: (
    event: ChangeEvent<HTMLInputElement>,
    label: muscleGroup
  ) => void;
  checkedState: "all" | "some" | "none";
}
const ExerciseCheckbox = ({
  label,
  handleChange,
  checkedState,
  isMobile,
}: ExerciseCheckboxProps) => {
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    if (checkedState === "none") {
      setChecked(false);
    } else if (checkedState === "all") {
      setChecked(true);
    }
  }, [checkedState]);

  return (
    <Grid
      display={"flex"}
      padding={"10px"}
      justifyContent={"left"}
      width={isMobile ? "50%" : "20%"}
    >
      <FormControlLabel
        control={
          <Checkbox
            onChange={(event) => {
              handleChange(event, label as muscleGroup);
              setChecked(!checked);
            }}
            checked={checked}
          />
        }
        label={<Typography fontSize={"18px"}>{label}</Typography>}
      />
    </Grid>
  );
};

const ExerciseList = ({
  letter,
  currentResults,
}: {
  letter: string;
  currentResults: Exercise[];
}) => {
  const letterExercises = currentResults.filter(
    (entry) => entry.name[0] === letter
  );

  if (letterExercises.length > 0) {
    return (
      <Grid>
        <Typography variant="h5" color={"primary"}>
          {letter}
        </Typography>
        <Divider />
        <Grid
          paddingLeft={"50px"}
          paddingTop={"20px"}
          display={"flex"}
          flexDirection={"column"}
        >
          {letterExercises.map((exercise: any) => (
            <ExerciseEntry name={exercise.name} key={exercise.name} />
          ))}
        </Grid>
      </Grid>
    );
  }
  return null;
};

const ExerciseEntry = ({ name }: { name: string }) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="text"
      sx={{ justifyContent: "left" }}
      onClick={() => navigate(`/${name.replace(" ", "-")}`)}
    >
      <Typography
        sx={{ textDecoration: "underline" }}
        color={"black"}
        textAlign={"left"}
      >
        {name}
      </Typography>
    </Button>
  );
};

export default ExerciseLibrary;
