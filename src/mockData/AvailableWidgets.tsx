// const AvailableWidgets = [
//       { topText: "Calories Burned",
//         middleText: "1,560",
//         bottomText: "-620 from yesterday" },
//       { topText: "Steps",
//         middleText: "3,001",
//         bottomText: "-2,450 from yesterday" },
//       { topText: "Recommended Exercise",
//         middleText: "Calf Raises",
//         bottomText: "Try it Out ->" },
//       { topText: "Active Minutes",
//         middleText: "34",
//         bottomText: "+3 from yesterday"},
//       { topText: "Distance Travelled",
//         middleText: "2.4 Kilometers",
//         bottomText: "-1.9 from yesterday"},
//     ]

const CaloriesWidget = {
  topText: "Calories Burned",
  middleText: "1,560",
  bottomText: "-620 from yesterday",
  isNumeric: true,
}

const StepsWidget = {
  topText: "Steps",
  middleText: "3,001",
  bottomText: "-2,450 from yesterday",
  isNumeric: true,
}

const RecommendedExerciseWidget = {
  topText: "Recommended Exercise",
  middleText: "Burpees",
  bottomText: "Try it Out →",
  isNumeric: false,
}

const ActiveMinutesWidget = {
  topText: "Active Minutes",
  middleText: "34",
  bottomText: "+3 from yesterday",
  isNumeric: true,
}

const DistanceTravelledWidget = {
  topText: "Distance Travelled",
  middleText: "2.4 Kilometers",
  bottomText: "-1.9 from yesterday",
  isNumeric: true,
}

const AvailableWidgets = [StepsWidget, CaloriesWidget,  RecommendedExerciseWidget, ActiveMinutesWidget, DistanceTravelledWidget];

export default AvailableWidgets;