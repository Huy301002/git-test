import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import { Navbar, NavItem, Icon } from 'react-materialize'
function About() {
  return (
    <div className='about'>
      <Collapsible accordion={false}>
      <CollapsibleItem header="The films"><Icon left></Icon> 
          <p>Here you can see the movie card, which consists of many movie hot today.</p>
        </CollapsibleItem>
        <CollapsibleItem header="Nation"><Icon left></Icon>
          <p>The movie is carefully selected and suitable for all ages</p>
        </CollapsibleItem>
        <CollapsibleItem header="Daliy News"><Icon left></Icon>
          <ul>
            <li><strong>CGV</strong> - CINEMA</li>
            <li><strong>CINESTAR</strong> - CINEMA</li>
            <li><strong>GALAXY</strong> - CINEMA</li>
          </ul>
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
}

export default About;