var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Child1 = React.createClass({
  render: function() {
    return (
      <div className="container">
      // Row for Searching New York Times
  <div className="row">
    <div className="col-sm-12">
      // First panel is for handling the search parameters
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title"><strong><i class="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
        </div>
        <div className="panel-body">

          // Here we create an HTML Form for handling the inputs
          <form role="form">

              // Here we create the text box for capturing the search term
            <div className="form-group">
              <label for="search">Search Term:</label>
              <input type="text" className="form-control" id="searchTerm">
            </div>

            // Here we capture the number of records that the user wants to retrieve
            <div className="form-group">
              <label for="pwd">Number of Records to Retrieve:</label>
            <select className="form-control" id="numRecordsSelect">
              <option value=1>1</option>
              // Setting the option for 5 as default
              <option value=5 selected>5</option>
              <option value=10>10</option>
            </select>       
            </div>

              // Here we capture the Start Year Parameter
            <div className="form-group">
              <label for="startYear">Start Year (Optional):</label>
              <input type="text" className="form-control" id="startYear">
            </div>

              // Here we capture the End Year Parameter
            <div className="form-group">
              <label for="endYear">End Year (Optional):</label>
              <input type="text" className="form-control" id="endYear">
            </div>

            // Here we have our final submit button
            <button type="submit" className="btn btn-default" id="runSearch"><i className="fa fa-search"></i> Search</button>
              <button type="button" className="btn btn-default" id="clearAll"><i className="fa fa-trash"></i> Clear Results</button>

          </form>
        </div>
      </div>
    </div>
  </div>

  // This row will handle all of the retrieved articles
  <div className="row">
    <div className="col-sm-12">

     // This panel will initially be made up of a panel and wells for each of the articles retrieved
      <div className="panel panel-primary">

       // Panel Heading for the retrieved articles box
        <div className="panel-heading">
          <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
        </div>

       // This main panel will hold each of the resulting articles
        <div className="panel-body" id="wellSection">
        </div>
      </div>
    </div>
  </div>
        
      </div>
    );
  }
});

module.exports = search;

// <div className="col-lg-12">
        //   <div className="panel panel-primary">
        //     <div className="panel-heading">
        //       <h3 className="panel-title">Child #1</h3>
        //     </div>
        //     <div className="panel-body">
        //       <p>I'm child 1!</p>
        //       <p>
        //         <Link to="/Child1/GrandChild1"><button className="btn btn-warning btn-sm">Show Grandchild #1</button></Link>
        //         <Link to="/Child1/GrandChild2"><button className="btn btn-success btn-sm">Show Grandchild #2</button></Link>
        //       </p>

        //       {/* This code will allow us to automatically dump the correct GrandChild component */}
        //       {this.props.children}
        //     </div>

        //   </div>
        // </div>