import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div id="ht-tm-jumbotron">
        <div class="jumbotron bg-transparent mb-0 radius-0">
          <div class="container">
            <div class="ht-tm-header">
              <div class="row">
                <div class="col-xl-8">
                  <h1 class="display-2">
                    #Cooking, #Farm Gam<span class="vim-caret">e</span>
                  </h1>
                  <div class="lead mb-3 text-mono text-success">
                    A Bootstrap theme for 1337 hackers.
                  </div>

                  <p class="mt-5 text-grey text-spacey">
                    Toffy is a website for your taste about mobile game. It is
                    built on top of the App Store and Google Play. Only the
                    leetest of hackers will be able to wield its power. Scroll
                    down to explore the components and dive into the source.
                  </p>

                  <div class="text-mono">
                    <a
                      href="#!"
                      class="ht-tm-element btn btn-shadow text-mono btn-outline-warning"
                    >
                      Join With Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
