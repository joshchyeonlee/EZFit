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
  bottomText: "-620 from yesterday"
}

const StepsWidget = {
  topText: "Steps",
  middleText: "3,001",
  bottomText: "-2,450 from yesterday"
}

const RecommendedExerciseWidget = {
  topText: "Recommended Exercise",
  middleText: "Calf Raises",
  bottomText: "Try it Out ->"
}

const ActiveMinutesWidget = {
  topText: "Active Minutes",
  middleText: "34",
  bottomText: "+3 from yesterday"
}

const DistanceTravelledWidget = {
  topText: "Distance Travelled",
  middleText: "2.4 Kilometers",
  bottomText: "-1.9 from yesterday"
}

console.log(CaloriesWidget);
console.log(StepsWidget);
const AvailableWidgets = [CaloriesWidget, StepsWidget, RecommendedExerciseWidget, ActiveMinutesWidget, DistanceTravelledWidget];
console.log(AvailableWidgets);
console.log(AvailableWidgets[0]);
console.log(AvailableWidgets[1]);

export default AvailableWidgets;