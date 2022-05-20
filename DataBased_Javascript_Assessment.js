/// Hello World! Thanks for exploring the opportunity to join us at DataBased. We wish you the best with the assessment.
/// Please complete and come prepared to present your solutions to the team.

/// Instructions: Solve the problems listed below.
/// In order to run the program please install a recent version of node
/// Then change your current directory to the same as the file
/// Run the command `node DataBased_Javascript_Assessment.js`

/**
 * Given an integer n, find the minimal k such that
 * k = m! (where m! = 1 * 2 * ... * m) for some integer m; k ≥n. In other
 * words, find the smallest factorial which is not less than n.
 */
function leastFactorial(n) {
  /* todo: Solve Problem 1 here */
  var factorial=1
  var iterate=1
  while(factorial<n){
    factorial*=iterate
    iterate+=1
  }
  return factorial;
}

function testLestFactorial() {
  console.log("\n" + "-".repeat(20));
  console.log("Part 1: Least Factorial");
  console.log(`Input 17, should be 24, output: ${leastFactorial(17)}`); //1*2*3*4
  console.log(`Input 5, should be 6, output: ${leastFactorial(5)}`); //1*2*3
  console.log(`Input 106, should be 120, output: ${leastFactorial(106)}`)
  console.log(`Input 0, should be 1, output: ${leastFactorial(1)}`)
  console.log(`Input 25, should be 120, output: ${leastFactorial(25)}`)
  console.log(`Input 24, should be 24, output: ${leastFactorial(24)}`)

  
  
}
/*
 * Given an array of strings that represent a type of shoe, return how many matching
 * pairs of shoes can be made?
 */

function getPairsOfShoes(shoes) {
  /*Solve Problem 4 here */
  const mapper = new Map()
  for (i of shoes){
    
    if( !mapper.has(i)){

      mapper.set(i,1)
      
    }
    else{

      mapper.set(i,mapper.get(i)+1)    

    }
  }


  var counter=0
 for ( i of mapper.keys()){
   counter+=Math.floor(mapper.get(i)/2)
 }
  return counter
  
}

function testPairsOfShoes() {
  console.log("\n" + "-".repeat(20));
  console.log("Part 4: Pairs of Shoes");
  let shoes = ["red", "blue", "red", "green", "green", "red"];
  console.log(
    "Input [",
    shoes.join(","),
    "], should be 2, output: " + getPairsOfShoes(shoes)
  );
  shoes = ["green", "blue", "blue", "blue", "blue", "blue", "green"];
  console.log(
    "Input [", 
    shoes.join(","),
    "], should be 3, output: " + getPairsOfShoes(shoes)
  );
  shoes = ["green", "blue","red","yellow"];
  console.log(
    "Input [", 
    shoes.join(","),
    "], should be 0, output: " + getPairsOfShoes(shoes)
  );
  shoes = ["green", "blue","blue","yellow"];
  console.log(
    "Input [", 
    shoes.join(","),
    "], should be 1, output: " + getPairsOfShoes(shoes)
  );
  shoes = ["green", "blue","blue","green"];
  console.log(
    "Input [", 
    shoes.join(","),
    "], should be 2, output: " + getPairsOfShoes(shoes)
  );
  shoes = [];
  console.log(
    "Input [", 
    shoes.join(","),
    "], should be 0, output: " + getPairsOfShoes(shoes)
  );

  console.log("\n");
}
/**
 * A school teacher wants to hand out treats to his students. The teacher decides
 * the best way to divide the treats is to have the students sit in a circle of
 * sequentially numbered chairs. A chair number will be drawn from a hat. Beginning
 * with the student in drawn chair, one treat will be handed to each student
 * sequentially going around the circle until all treats have been distributed.
 * The teacher wants to have the students involved in sharing treats. He decides
 * that whoever gets the very last treat, will be the student who makes the treats
 * for the next game. Determine the chair number occupied by the student who
 * will receive the last treat.
 * For example, there are 4 students and 6 treats. The students arrange them-
 * selves in seats numbered 1 to 4. Let’s suppose 2 is drawn from the hat. Students
 * receive treats at positions 2,3,4,1,2,3. The student who gets the last treat is in
 * chair number 3.
 */
 function getLastStudent(numberOfStudents,treats,startingChair) {
  /*Solve Problem 3 here */
 var last=(startingChair+treats-1)%numberOfStudents
  if(last==0){
    return startingChair
  }
  else{
    return last
  }
}

function testLastStudent() {
  console.log("\n" + "-".repeat(20));
  console.log("Part 3: Last Student");
  console.log(
    "Input 5 student, 2 treats, and 1 as starting chair, should be 2, , output: " +
      getLastStudent(5, 2, 1)
  );
  console.log(
    "Input 5 student, 2 treats, and 2 as starting chair, should be 3, , output: " +
      getLastStudent(5, 2, 2)
  );
  console.log(
    "Input 7 student, 19 treats, and 2 as starting chair, should be 6, , output: " +
      getLastStudent(7, 19, 2)
  );
  console.log(
    "Input 3 student, 7 treats, and 3 as starting chair, should be 3, , output: " +
      getLastStudent(3, 7, 3)
  );
  console.log(
    "Input 28 student, 30 treats, and 1 as starting chair, should be 2, , output: " +
      getLastStudent(28, 30, 1)
  );
  console.log(
    "Input 14 student, 12 treats, and 1 as starting chair, should be 12, , output: " +
      getLastStudent(14, 12, 1)
  );
  console.log(
    "Input 1 student, 0 treats, and 1 as starting chair, should be 1, , output: " +
      getLastStudent(1, 0, 1)
  );
  console.log(
    "Input 100000 student, 5 treats, and 1 as starting chair, should be 5, , output: " +
      getLastStudent(100000, 5, 1)
  );
  console.log(
    "Input 100 student, 5000000 treats, and 4 as starting chair, should be 3, , output: " +
      getLastStudent(100, 5000000, 4)
  );

}
/**
 * When a lipstick container is empty, there is actually
 * some leftover lipstick at the bottom that cannot be used because it is not
 * accessible. Being an environmentally friendly business owner, you would like to
 * recycle the leftover lipstick to make more. As a business, you know you need
 * ‘numberOfLeftoversNeeded‘ to make a new lipstick. You have ‘numberOfLipsticks‘
 * in your possession. What’s the total number of lipsticks you can sell
 * assuming that each of your customers return their leftovers?
 */
 function getTotalNumberOfLipsticks(numberOfLipsticks, numberOfLeftoversNeeded) {
  var totallipsticks=numberOfLipsticks
  if(numberOfLeftoversNeeded==0){
    return 0
  }
  while(numberOfLipsticks>=numberOfLeftoversNeeded){
    var left=numberOfLipsticks%numberOfLeftoversNeeded
    numberOfLipsticks=Math.floor(numberOfLipsticks/numberOfLeftoversNeeded)
    totallipsticks+=numberOfLipsticks
    numberOfLipsticks+=left
  }
  return totallipsticks
}

function testLipstick() {
  console.log("\n" + "-".repeat(20));
  console.log("Part 2: Lipstick");
  console.log(
    "Input 5 lipsticks and 2 left overs needed, should be: 9, output: " +
      getTotalNumberOfLipsticks(5, 2)
  );
  console.log(
    "Input 15 lipsticks and 5 left overs needed, should be: 18, output: " +
      getTotalNumberOfLipsticks(15, 5)
  );
  console.log(
    "Input 2 lipsticks and 3 left overs needed, should be: 2, output: " +
      getTotalNumberOfLipsticks(2, 3)
  );
  console.log(
    "Input 0 lipsticks and 3 left overs needed, should be: 0, output: " +
      getTotalNumberOfLipsticks(0, 3)
  );
  console.log(
    "Input 1 lipsticks and 0 left overs needed, should be: 0, output: " +
      getTotalNumberOfLipsticks(1, 0)
  );
  console.log(
    "Input 0 lipsticks and 0 left overs needed, should be: 0, output: " +
      getTotalNumberOfLipsticks(0, 0)
  );
  console.log(
    "Input 3 lipsticks and 3 left overs needed, should be: 4, output: " +
      getTotalNumberOfLipsticks(3, 3)
  );

}

testLestFactorial();
testLipstick();
testLastStudent();
testPairsOfShoes();