import React, { useState } from "react";
 
// BMI calculator function
function calculateBMI(weight, height) {
 
  // Convert weight from pounds to kilograms and height from inches to meters
  weight = weight * 0.45359237;
  height = height * 0.0254;

  // Calculate BMI
  let bmi = weight / (height * height);

  // Return result
  return bmi.toFixed(2);
}

function calculateBMIMetric(weight, height) {
 
  // Calculate BMI
  let bmi = weight / (height * height) * 10000;

  // Return result
  return bmi.toFixed(2);
}
 
// Function to classify BMI based on WHO classification
function classifyBMI(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
 
// BMI calculator React component
function BMICalculator() {
  // State to store user input and results
  const [toggle, setToggle] = useState(false);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState(0);
  const [classification, setClassification] = useState("");

 
  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
 
    if (toggle) {

        // Calculate and classify BMI
        let bmi = calculateBMIMetric(weight, height);
        let classification = classifyBMI(bmi);
    
        // Update state with results
        setBMI(bmi);
        setClassification(classification);
    }
    else {

        // Calculate and classify BMI
        let bmi = calculateBMI(weight, height);
        let classification = classifyBMI(bmi);
    
        // Update state with results
        setBMI(bmi);
        setClassification(classification);
    }
  }
 
  return (

    <>

     <div
      className="bg-[#202020] w-full h-[100vh] flex justify-center"
     >
            <div
              className="w-[80vw] h-[600px] md:w-[80vw] md:h-[750px] lg:w-[1000px] lg:h-[600px] p-[10px] m-[20px] sm:m-[50px] lg:m-[50px] flex flex-col lg:flex-row items-center justify-between"
            >
                  <div
                    className="flex flex-col p-[10px] gap-[40px]"
                  >

                      <div
                        className="w-[320px] h-[160px] md:w-[500px] md:h-[220px] flex flex-col rounded-xl shadow-xl items-center p-[20px] gap-[10px] md:gap-[20px] bg-[#333333]"
                      >
                        <h1
                          className="text-[24px] md:text-[40px] text-[#CBC3D0] font-semibold "
                        >
                        Measurement system</h1>

                        <div className="w-[300px] md:w-[450px] p-[20px] flex flex-row justify-between ">
                          <button 
                            className="w-[120px] h-[40px] md:w-[180px] md:h-[60px] rounded-xl text-[20px] md:text-[24px] text-[#CBC3D0] active:text-[#09061c] bg-[#111111] active:bg-[#CBC3D0]" 
                            onClick={() => setToggle(true)} > Metric </button>
                          <button 
                            className="w-[120px] h-[40px] md:w-[180px] md:h-[60px] rounded-xl text-[20px] md:text-[24px] text-[#CBC3D0] active:text-[#09061c] bg-[#111111] active:bg-[#CBC3D0]"  
                            onClick={() => setToggle(false)} > Imperial </button>
                        </div>
                      </div>

                      

                      <form 
                        className="w-[320px] h-[220px] md:w-[500px] md:h-[320px] flex flex-col rounded-xl shadow-xl items-center justify-center p-[20px] md:gap-[20px] text-[16px] md:text-[24px] text-[#CBC3D0] bg-[#333333]"
                        onSubmit={handleSubmit}
                      >

                        <label
                          className="p-[20px] w-[300px] md:w-[450px] flex flex-row items-center justify-between"
                        >
                          {toggle ? "Weight (in Kilograms)": "Weight (in Pounds)"}

                          <input
                            className="bg-[#333333] w-[80px] h-[30px] md:w-[120px] md:h-[40px] px-2 rounded-md border border-[#111111]"
                            type="number"
                            value={weight}
                            onChange={(event) => setWeight(event.target.value)}
                          />
                        </label>
                      
                        <label
                          className="p-[20px] w-[300px] md:w-[450px] flex flex-row items-center justify-between"
                        >
                          {toggle ? "Height (in Centimeters)": "Height (in Inches)"}

                          <input
                            className="bg-[#333333] w-[80px] h-[30px] md:w-[120px] md:h-[40px] px-2 rounded-md border border-[#111111]"
                            type="number"
                            value={height}
                            onChange={(event) => setHeight(event.target.value)}
                          />
                        </label>
                        
                        <input 
                          className="w-[260px] h-[50px] md:w-[420px] md:h-[60px] rounded-xl text-[#EBA63F] active:text-[#09061c] bg-[#111111] active:bg-[#CBC3D0] cursor-pointer"
                          type="submit" value="Calculate BMI" />
                        
                      </form>
                  
                  </div> 
                

                  <div
                    className={`flex flex-col items-center opacity-[${classification === "" ? 0 : 100}] text-[24px] md:text-[40px] text-[#CBC3D0]`}
                  >
                      <h1
                        className="font-semibold"
                      >Your BMI is {bmi}</h1>
                      <p
                        className="text-[20px] md:text-[24px] text-[#CBC3D0]"
                      >You are classified as</p>
                      <h1
                        className="text-[#EBA63F] font-semibold"
                      >{classification}</h1>
                      
                  </div>
            </div>

      </div>        
    </>
  );
}
 
export default BMICalculator;