import React, { Component } from "react";
import { Line } from "rc-progress";
class IcoSkill extends Component {
  render() {
    return (
      <section id="f-skills">
        <div class="f-section f-skills f-icobar f-teammate_skill">
          <div class="container">
            <div class="row clearfix">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="f-section_head">
                  <h2>ICO Funds Distribution</h2>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="f-skill_bars">
                  <div class="f-skill_graph_single">
                    <span class="f-skill_title">
                      Trading / Underlying Assets
                    </span>
                    <span data-attr="50" class="f-skill_val">
                      50%
                    </span>
                    <Line
                      percent="50"
                      strokeWidth="0.7"
                      strokeColor="#1e82fe"
                    />
                  </div>
                  <div class="f-skill_graph_single">
                    <span class="f-skill_title">Marketing</span>
                    <span data-attr="20" class="f-skill_val">
                      20%
                    </span>
                    <Line
                      percent="20"
                      strokeWidth="0.7"
                      strokeColor="#1e82fe"
                    />
                  </div>
                  <div class="f-skill_graph_single">
                    <span class="f-skill_title">Development</span>
                    <span data-attr="20" class="f-skill_val">
                      20%
                    </span>
                    <Line percent="20" strokeWidth="0.7" strokeColor="#1e82fe" />
                  </div>
                  <div class="f-skill_graph_single">
                    <span class="f-skill_title">Operational Expenses</span>
                    <span data-attr="10" class="f-skill_val">
                      10%
                    </span>
                    <Line percent="10" strokeWidth="0.7" strokeColor="#1e82fe" />
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

export default IcoSkill;
