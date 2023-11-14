import React from "react";


function Y13HealthCheckQuestions(props){



    return(
        /*Question 1 begins with question*/
      <div>
      
        <div class="form-group my-5" id="question-1">
          
          <h2>Question 1</h2>
          <fieldset name="question-1">

          <legend>This question is about ionic bonding. Select all the correct statements.</legend>
          
          <p>Ionic bonding...</p>          
        
        {/*Question 1 options*/}
          <div class="form-check">
            
            <label class="form-check-label" >
              <input class="form-check-input" 
                     onChange={props.onValueCheck}  
                     type="checkbox" 
                     value="...is the process that occurs when atoms of a metal each donate one or more electrons to atoms of a non-metal." id="Q1-option1" name="question-1" />
              ...is the process that occurs when atoms of a metal each donate one or more electrons to atoms of a non-metal.
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueCheck}
              class="form-check-input" type="checkbox" value="...can occur between ions composed completely of non-metals." id="Q1-option2"  name="question-1" />
              ...can occur between ions composed completely of non-metals.
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
               onChange={props.onValueCheck}
               class="form-check-input" type="checkbox" value="...is the electrostatic attraction between oppositely charged ions." id="Q1-option3" name="question-1" />
              ...is the electrostatic attraction between oppositely charged ions.
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
               onChange={props.onValueCheck}
               class="form-check-input" type="checkbox" value="...always produces a giant lattice structure." id="Q1-option4" name="question-1" />
              ...always produces a giant lattice structure.
            </label>
          </div>
        </fieldset>
        </div>
          {/*Question 1 ends*/}

          {/*Question 2 begins with question*/}
          <div class="form-group my-5" id="question-2">
            <h2>Question 2</h2>
            <fieldset name="question-2">
            <legend>This question is about the dynamic equilibrium that is established during the Haber Process. Select one answer. </legend>
            <p>N<sub>2(g)</sub> + 3H<sub>2(g)</sub> &#8651; 2NH<sub>3(g)</sub>             &#916;H = −92.4 kJmol<sup>-1</sup></p> 
            <p>When the equilibrium mixture is heated, it...</p>

          {/*Question 2 options*/}
          
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="shifts in the exothermic direction, towards the reactants" name="question-2" id="Q2-option1" />
              ...shifts in the exothermic direction, towards the reactants.
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="shifts in the endothermic direction, towards the products" name="question-2" id="Q2-option2" />
              ...shifts in the endothermic direction, towards the products.
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="shifts in the exothermic direction, towards the products" name="question-2" id="Q2-option3" />
              ...shifts in the exothermic direction, towards the products.
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="shifts in the endothermic direction, towards the reactants" name="question-2" id="Q2-option4" />
              ...shifts in the endothermic direction, towards the reactants.
            </label>
          </div>
        </fieldset>

          </div>
         {/*Question 2 ends*/}

          {/*Question 3 begins with question*/}
          <div class="form-group my-5" id="question-3">
            <h2>Question 3</h2>
            <fieldset name="question-3">
            <legend>This question is about the the electrophilic addition reaction mechanism. Select the option that shows the correct
              first step for the reaction between ethene and hydrogen bromide. </legend>
            
            {/*Question 3 options*/}
          
          <div class="mt-5 form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="option A - incorrect" name="question-3" id="Q3-option1" />
              <div class="img-fluid">
                <img class="w-50" src="../images/resources/y13-health-check/q3-image-A.png"></img>
              </div>
              
            </label>
          </div>
          <div class="mt-5 form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="option B - incorrect" name="question-3" id="Q3-option2" />
              <div class="img-fluid">
                <img class="w-50" src="../images/resources/y13-health-check/q3-image-B.png"></img>
              </div>
              
            </label>
          </div>
          <div class="mt-5 form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="option C - incorrect" name="question-3" id="Q3-option3" />
              <div class="img-fluid">
                <img class="w-50" src="../images/resources/y13-health-check/q3-image-C.png"></img>
              </div>
              
            </label>
          </div>
          <div class="mt-5 form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="option D - correct" name="question-3" id="Q3-option4" />
              <div class="img-fluid">
                <img class="w-50" src="../images/resources/y13-health-check/q3-image-D.png"></img>
              </div>
              
            </label>
          </div>
        </fieldset>

          </div>
          {/*Question 3 ends*/}

           {/*Question 4 begins with question*/}
           <div class="form-group my-5" id="question-4">
            <h2>Question 4</h2>
            <fieldset name="question-4">
            <legend class="mb-5">This question is about enthalpy changes. Use the data provided to calculate the standard 
              enthalpy of formation of ethane, C<sub>2</sub>H<sub>6</sub>.</legend>
            

            {/*table code*/}
            <table class="mb-5 table  table-bordered">
              <thead>
                <tr>
                  <th scope="col">Substance</th>
                  <th scope="col">&#916;<sub>c</sub>H / kJmol<sup>-1</sup></th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">C<sub>(s)</sub></th>
                  <td>–393.5</td>                  
                </tr>
                <tr>
                  <th scope="row">H<sub>2(g)</sub></th>
                  <td>–285.9</td>
                  
                </tr>
                <tr>
                  <th scope="row">C<sub>2</sub>H<sub>6(g)</sub></th>
                  <td>–1559.8</td>
                  
                </tr>
              </tbody>
            </table>
            
          {/*Question 4 options*/}
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="+84.9 kJ/mol incorrect subtotals summed backwards" name="question-4" id="Q4-option1" />
              +84.9 kJmol<sup>-1</sup> 
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="–84.9kJ/mol correct" name="question-4" id="Q4-option2" />
              –84.9kJmol<sup>-1</sup> 
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="+880.4kJ/mol subtotals no coefficients" name="question-4" id="Q4-option3" />
              +880.4kJmol<sup>-1</sup> 
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="–880.4kJmol subtotals no coefficients" name="question-4" id="Q4-option4" />
              –880.4kJmol<sup>-1</sup> 
              
            </label>
          </div>
        </fieldset>

          </div>
          {/*Question 4 ends*/}

           {/*Question 5 begins with question*/}
        <div class="form-group my-5" id="question-5">
          <h2>Question 5</h2>
          <fieldset name="question-5">
          <legend>A student is comparing the boiling points of ethanol, ethanal and ethanoic acid, trying to decide which boils at
            the highest temperature and which at the lowest. They write the following notes. Tick all of the statements that
            are correct.
          </legend>
          
          <div class="row">
            <div class="col-md-4 d-flex flex-column justify-content-between">
              <div>
                <img class="img-fluid" src="../images/resources/y13-health-check/ethanol.png"></img>
              </div>
              <p>Ethanol</p>
            </div>
            <div class="col-md-4 d-flex flex-column justify-content-between mx-auto">
              <div>
                <img class="img-fluid w-75" src="../images/resources/y13-health-check/ethanal.png"></img>
              </div>
              <p>Ethanal</p>
            </div>
            <div class="col-md-4 d-flex flex-column justify-content-between">
              <div>
                <img class="img-fluid" src="../images/resources/y13-health-check/ethanoic acid.png"></img>
              </div>
              <p>Ethanoic acid</p>
            </div>
          </div>
          
                
        
        {/*Question 5 options*/}
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueCheck} class="form-check-input" type="checkbox" value="Ethanoic acid has a double C=O bond which increases the boiling point because it takes more energy to break" id="Q5-option1" name="question-5" />
              Ethanoic acid has a double C=O bond which increases the boiling point because it takes more energy to break.
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueCheck} class="form-check-input" type="checkbox" value="Ethanal has the weakest Van der Waals forces" id="Q5-option2" name="question-5" />
              Ethanal has the weakest Van der Waals forces.
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueCheck} class="form-check-input" type="checkbox" value="Molecules of all three compounds experience hydrogen bonding" id="Q5-option3" name="question-5" />
              Molecules of all three compounds experience hydrogen bonding.
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueCheck} class="form-check-input" type="checkbox" value="Molecules of ethanoic acid experience permanent dipole permanent dipole interactions, which increase its boiling point" id="Q5-option4" name="question-5" />
              Molecules of ethanoic acid experience permanent dipole permanent dipole interactions, which increase its boiling point.
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueCheck} class="form-check-input" type="checkbox" value="The covalent O−H bond in ethanol is a hydrogen bond" id="Q5-option5" name="question-5" />
              The covalent O−H bond in ethanol is a hydrogen bond.
              
            </label>
          </div>
        </fieldset>
        </div>
          {/*Question 5 ends*/}

           {/*Question 6 begins with question*/}
           <div class="form-group my-5" id="question-6">
            <h2>Question 6</h2>
            <fieldset name="question-6">
            <legend>This question is about redox reactions. Select the correct statement.</legend>
            
            <p>2MnO<sub>4</sub><sup>−</sup><sub>(aq)</sub> + 5H<sub>2</sub>O<sub>2(aq)</sub> + 6H<sup>+</sup><sub>(aq)</sub> &#8594; 2Mn<sup>2+</sup><sub>(aq)</sub> + 5O<sub>2(g)</sub> + 8H<sub>2</sub>O<sub>(l))</sub>   </p> 
            <p>MnO<sub>4</sub><sup>−</sup> is...</p>
            
          {/*Question 6 options*/}
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="the oxidising agent because it donates electrons" name="question-6" id="Q6-option1" />
              ...the oxidising agent because it gains electrons.
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="the oxidising agent because it donates electrons" name="question-6" id="Q6-option2" />
              ...the oxidising agent because it donates electrons.
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="the reducing agent because it gains electrons" name="question-6" id="Q6-option3" />
              ...the reducing agent because it gains electrons.
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="the reducing agent because it donates electrons" name="question-6" id="Q6-option4" />
              ...the reducing agent because it donates electrons.
              
            </label>
          </div>
        </fieldset>

          </div>
          {/*Question 6 ends*/}

          {/*Question 7 begins with question*/}
        <div class="form-group my-5" id="question-7">
          <h2>Question 7</h2>
          <fieldset name="question-7">
          <legend>This question is about silicon dioxide. Tick all the correct statements. SiO<sub>2</sub> has a high melting because... 
          </legend>
          
                
        
        {/*Question 7 options*/}
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueCheck} class="form-check-input" type="checkbox" value="it has strong intermolecular forces" id="Q7-option1" name="question-7" />
              ...it has strong intermolecular forces.
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueCheck} class="form-check-input" type="checkbox" value="its atoms have full outer shells" id="Q7-option2" name="question-7" />
              ...its atoms have full outer shells.
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueCheck} class="form-check-input" type="checkbox" value="it has strong forces of attraction between shared pairs of electrons and positive nuclei" id="Q7-option3" name="question-7" />
              ...it has strong forces of attraction between shared pairs of electrons and positive nuclei.
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueCheck} class="form-check-input" type="checkbox" value="it has a giant lattice structure" id="Q7-option4" name="question-7" />
              ...it has a giant lattice structure.
              
            </label>
          </div>
        </fieldset>
          
        </div>
          {/*Question 7 ends*/}

          {/*Question 8 begins with question*/}
          <div class="form-group my-5" id="question-8">
            <h2>Question 8</h2>
            <fieldset name="question-8">
            <legend>This question is about reactions of alcohols. The diagram shows the display formula of butan-1,3-diol. The compound 
              is refluxed with excess acidified potassium dichromate. Select the main product.
            </legend>
            
            <div class=" my-5">
              <img class="w-50 img-fluid" src="../images/resources/y13-health-check/butan-1,3-diol.png" ></img>
            </div>
            
          {/*Question 8 options*/}
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="CH3CH(OH)CH2CHO" name="question-8" id="Q8-option1" />
              CH<sub>3</sub>CH(OH)CH<sub>2</sub>CHO
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="CH3CH(OH)CH2COOH" name="question-8" id="Q8-option2" />
              CH<sub>3</sub>CH(OH)CH<sub>2</sub>COOH
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="CH3COCH2CHO" name="question-8" id="Q8-option3" />
              CH<sub>3</sub>COCH<sub>2</sub>CHO
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="CH3COCH2COOH" name="question-8" id="Q8-option4" />
              CH<sub>3</sub>COCH<sub>2</sub>COOH
              
            </label>
          </div>
        </fieldset>

          </div>
          {/*Question 8 ends*/}

          {/*Question 9 begins with question*/}
        <div class="form-group my-5" id="question-9">
          <h2>Question 9</h2>
          <fieldset name="question-9">
          <legend>This question is about polar molecules. Tick all the statements that correctly describe the compounds shown in the diagrams.
          </legend>
          <div class="row">
            <div class="col-md-4 d-flex flex-column justify-content-between">
              <div>
                <img class="img-fluid" src="../images/resources/y13-health-check/q9-methane.png"></img>
              </div>
              <p>A</p>
            </div>
            <div class="col-md-4 d-flex flex-column justify-content-between mx-auto">
              <div>
                <img class="img-fluid" src="../images/resources/y13-health-check/dichloro-difluoromethane.png"></img>
              </div>
              <p>B</p>
            </div>
            <div class="col-md-4 d-flex flex-column justify-content-between">
              <div>
                <img class="img-fluid" src="../images/resources/y13-health-check/tetrafluoromethane.png"></img>
              </div>
              <p>C</p>
            </div>
          </div>
                
        
        {/*Question 9 options*/}
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueCheck} class="form-check-input" type="checkbox" value="Molecules B and C contain polar bonds" id="Q9-option1" name="question-9" />
              Molecules B and C contain polar bonds.
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueCheck} class="form-check-input" type="checkbox" value="In C the dipoles cancel out" id="Q9-option2" name="question-9" />
              In C the dipoles cancel out.
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueCheck} class="form-check-input" type="checkbox" value="A is non-polar" id="Q9-option3" name="question-9" />
              A is non-polar.
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueCheck} class="form-check-input" type="checkbox" value="Molecules B and C are polar" id="Q9-option4" name="question-9" />
              Molecules B and C are polar.
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueCheck} class="form-check-input" type="checkbox" value="The C−Cl bond is polar because chlorine is significantly more electronegative than carbon" id="Q9-option5" name="question-9" />
              The C−Cl bond is polar because chlorine is significantly more electronegative than carbon.
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueCheck} class="form-check-input" type="checkbox" value="All three molecules are asymmetrical" id="Q9-option6" name="question-9" />
              All three molecules are asymmetrical.
              
            </label>
          </div>
        </fieldset>
          
        </div>
          {/*Question 9 ends*/}

          {/*Question 10 begins with question*/}
          <div class="form-group my-5" id="question-10">
            <h2>Question 10</h2>
            <fieldset name="question-10">
            <legend>This question is about titration. A student prepared 250 cm<sup>3</sup> of a solution of NaOH. The student fills a burette 
              with this solution. Next the student adds 25.0 cm<sup>3</sup> of H<sub>2</sub>SO<sub>4</sub> with a concentration of 
              0.060 mol dm<sup>-3</sup> to a conical flask. The average titre was 28.2cm<sup>3</sup>. Calculate what mass of NaOH was dissolved 
              to make up the original 250cm<sup>3</sup> solution.
            </legend>
            <p>H<sub>2</sub>SO<sub>4</sub>  +  2NaOH  &#8594;  Na<sub>2</sub>SO<sub>4</sub>  + 2H<sub>2</sub>O</p>
            
          {/*Question 10 options*/}
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="1.06g - correct answer" name="question-10" id="Q10-option1" />
              1.06g
              
            </label>
          </div>
          <div class="form-check">            
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="1.20g wrong solution in burette" name="question-10" id="Q10-option2" />
              1.20g
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="0.120g no scaling up" name="question-10" id="Q10-option3" />
              0.120g
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="0.266g moles of sulfuric acid halved instead of doubled" name="question-10" id="Q10-option4" />
              0.266g
              
            </label>
          </div>
        </fieldset>

          </div>
          {/*Question 10 ends*/}

          {/*Question 11 begins with question*/}
          <div class="form-group my-5" id="question-11">
            <h2>Question 11</h2>
            <fieldset name="question-11">
            <legend>This question is about naming organic compounds. Select the correct name for the compound shown in the diagram.</legend>
            <div class=" my-5">
              <img class="w-50 img-fluid" src="../images/resources/y13-health-check/q11-branched-alkane.png" ></img>
            </div>
            
          {/*Question 11 options*/}
          <div class="form-check">
           
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="2-methyl-4-ethylpentane" name="question-11" id="Q11-option1" />
              2-methyl-4-ethylpentane
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="2-ethyl-4-methylpentane" name="question-11" id="Q11-option2" />
              2-ethyl-4-methylpentane
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="2,4-dimethylhexane" name="question-11" id="Q11-option3" />
              2,4-dimethylhexane
              
            </label>
          </div>
          <div class="form-check">
            
            <label class="form-check-label">
              <input 
              onChange={props.onValueChange} class="form-check-input" type="radio" value="3,5-dimethylhexane" name="question-11" id="Q11-option4" />
              3,5-dimethylhexane
              
            </label>
          </div>
        </fieldset>

          </div>
          {/*Question 11 ends*/}




</div>

    )
}

export default Y13HealthCheckQuestions;

/* 

<!--
        <div class="form-group my-1">
         <label for="name">Name</label>
         <input type="name" class="form-control" id="name" placeholder="Name" name="name"></input>
       </div>
       <div class="form-group my-1">
         <label for="email">Email address</label>
         <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email"></input>
         <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>

So what this is is a working regex expression that validates postcodes (more or less). Not sure whether or not to use
       <div class="form-group my-1">hello
         <label for="postcode">Postcode</label>
         <input type="postcode" class="form-control" id="email" placeholder="Enter postcode" name="postcode" required pattern="^(([A-Z][0-9]{1,2})|(([A-Z][A-HJ-Y][0-9]{1,2})|(([A-Z][0-9][A-Z])|([A-Z][A-HJ-Y][0-9]?[A-Z])))) [0-9][A-Z]{2}$">
         <!--<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>--><!--
       </div>
     
       
       <div class="form-group my-1">
         <label for="inquiry">Your inquiry. Feel free to include time(s) you would like tutoring</label>
         <textarea class="form-control" id="inquiry" rows="3" name="inquiry"></textarea>
       </div>--> */