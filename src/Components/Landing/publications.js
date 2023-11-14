import React from "react";

function Publications(props){

    return(
        /*Publications*/


<div className="section" id="publications">
  <h2 className="fs-1">Publications</h2>
  <hr className="featurette-divider"></hr>
<div className="row featurette">
  <div className="col-md-7">
    <h3 className="featurette-heading fs-2"><a target="_blank" rel="noopener noreferrer" href="https://edu.rsc.org/feature/polished-polymers/3007359.article?adredir=1">Polished Polymers</a></h3>
    <p className="lead">Learn about the free radical reactions that make nail manicures possible. Published in <em>The Mole</em>, Royal Society of Chemistry.</p>
  </div>
  <div className="col-md-5">
    <img className="featurette-image img-fluid center-block" src="images/shellac manicure portrait.jpg" alt="a beautician giving a nail manicure"></img>
  </div>
</div>

<hr className="featurette-divider"></hr>

<div className="row featurette fudge-featurette">
  <div className="col-md-5 col-md-pull-7">
    <img className="featurette-image img-fluid center-block" src="images/fudge-portrait.jpg" alt="a market stall piled high with different flavoured fudges"></img>
  </div>
  <div className="col-md-7 col-md-push-5">
    <h3 className="featurette-heading fs-2"><a target="_blank" rel="noopener noreferrer" href="https://www.acs.org/content/acs/en/education/resources/highschool/chemmatters/past-issues/archive-2014-2015/candymaking.html">The Sweet Science of Candy Making</a></h3>
    <p className="lead">Learn how making fudges links to the challenging concepts of crystallisation, intermolecular forces and dynamic equilibrium. Published in <em>ChemMatters</em>, the American Chemical Society.</p>
  </div>
  
</div>

<hr className="featurette-divider"></hr>

<div className="row featurette">
  <div className="col-md-7">
    <h3 className="featurette-heading fs-2"><a target="_blank" rel="noopener noreferrer" href="https://pubs.rsc.org/en/content/ebook/978-1-78262-134-8">The Chemistry of Human Nature</a></h3>
    <p className="lead">Explore the biochemical processes that motivate us to eat, fall in love and behave in the unique ways we do in this popular science book published by the RSC.</p>
  </div>
  <div className="col-md-5">
    <img className="featurette-image img-fluid center-block" src="images/Chemistry of Human Nature cover.png" alt="person being constructed from DNA"></img>
  </div>
</div>
</div>
    )
}

export default Publications;