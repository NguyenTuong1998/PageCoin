import React, { Component } from "react";
import { Line } from "rc-progress";
class Skill extends Component {
  render() {
    return (
      <section id="f-skills">
        <div class="f-section f-skills">
          <div class="container">
            <div class="row clearfix">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-5">
                <div class="f-section_head">
                  <h2>Skills</h2>
                </div>
                <div class="f-welcome_text">
                  <p class="text-justify">
                    In all revolutions of government, he would make his court
                    for the office of hangman-general, and in the exercise of
                    that dignity, wherein he was very dexterous, would make use
                    of no other vizard than a long prayer. In two days they
                    brought me ten sheets of paper filled up on every side. They
                    swore to me that they had ransacked whatever could be found
                    in the characters of Socrates
                  </p>
                  <a class="f-primary_but" href="#">
                    about us
                  </a>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-7">
                <div class="f-skill_bars">
                  <div class="f-skill_graph_single">
                    
                    <span class="f-skill_title">Overdraft</span>
                    <span data-attr="90" class="f-skill_val">
                      90%
                    </span>
                    <Line
                      percent="90"
                      strokeWidth="0.7"
                      strokeColor="#1e82fe"
                    />
                  </div>
                  <div class="f-skill_graph_single">
                    
                    <span class="f-skill_title">Text help</span>
                    <span data-attr="80" class="f-skill_val">
                      80%
                    </span>
                    <Line
                      percent="80"
                      strokeWidth="0.7"
                      strokeColor="#1e82fe"
                    />
                  </div>
                  <div class="f-skill_graph_single">
                    
                    <span class="f-skill_title">Insurance</span>
                    <span data-attr="95" class="f-skill_val">
                      95%
                    </span>
                    <Line
                      percent="95"
                      strokeWidth="0.7"
                      strokeColor="#1e82fe"
                    />
                  </div>
                  <div class="f-skill_graph_single">
                    
                    <span class="f-skill_title">Mortgage</span>
                    <span data-attr="75" class="f-skill_val">
                      75%
                    </span>
                    <Line
                      percent="75"
                      strokeWidth="0.7"
                      strokeColor="#1e82fe"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skill;
