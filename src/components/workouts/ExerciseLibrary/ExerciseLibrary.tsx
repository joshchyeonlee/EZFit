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
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { exerciseLibraryMockData } from "./ExerciseLibrary.mockData";
import { Exercise, muscleGroup } from "./ExerciseLibrary.types";
import { ChangeEvent, useEffect, useState } from "react";

const initialFilterState: muscleGroup[] = [
  "Back",
  "Biceps",
  "Chest",
  "Core",
  "Glutes",
  "Hamstrings",
  "Shoulders",
  "Triceps",
  "Quadriceps",
];

function ExerciseLibrary() {
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

  useEffect(() => {
    console.log({ filters });
    console.log(exerciseSearchResults);
    const results = exerciseSearchResults.filter((exercise) =>
      exercise.muscles.some((muscle) => filters.includes(muscle))
    );

    setExerciseFilterResults(results);
  }, [filters, exerciseSearchResults]);

  return (
    <Grid>
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
      <Grid justifyContent={"center"} display={"flex"}>
        <Grid width={"40%"}>
          <SearchBar
            placeholder="Search For Exercise..."
            onSearch={handleSearch}
          />
          <ExerciseFilters handleFilterChange={handleFilterChange} />
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

const ExerciseFilters = ({
  handleFilterChange,
}: {
  handleFilterChange: (
    event: ChangeEvent<HTMLInputElement>,
    label: muscleGroup
  ) => void;
}) => {
  return (
    <Grid display={"flex"} alignItems={"center"} flexDirection={"column"}>
      <Grid display={"flex"}>
        {initialFilterState.slice(0, 4).map((category) => (
          <ExerciseCheckbox
            label={category}
            handleChange={handleFilterChange}
            key={category}
          />
        ))}
      </Grid>
      <Grid display={"flex"}>
        {initialFilterState.slice(4, 9).map((category) => (
          <ExerciseCheckbox
            label={category}
            handleChange={handleFilterChange}
            key={category}
          />
        ))}
      </Grid>
    </Grid>
  );
};

interface ExerciseCheckboxProps {
  label: string;
  handleChange: (
    event: ChangeEvent<HTMLInputElement>,
    label: muscleGroup
  ) => void;
}

const ExerciseCheckbox = ({ label, handleChange }: ExerciseCheckboxProps) => {
  const [checked, setChecked] = useState(true);
  return (
    <Grid display={"flex"} padding={"8px"}>
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

  if (letterExercises.length > 0)
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
