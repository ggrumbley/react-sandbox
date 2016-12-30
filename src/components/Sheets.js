import React, { Component, PropTypes } from 'react';

class Sheets extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.initialData,
      sortby: null,
      descending: false,
      edit: null,
      search: false,
    };
  }

  // _log: [];
  // _logSetState = function (newState) {
  //   this._log.push(JSON.parse(JSON.stringify(
  //     this._log.length === 0 ? this.state : newState
  //   )));
  //   this.setState(newState);
  // };

  _replay = function () {
    if (this._log.length === 0) {
      console.warn('No state to replay yet');
      return;
    }
    var idx = -1;
    var interval = setInterval(function () {
      idx++;
      if (idx === this._log.length - 1) {
        clearInterval(interval);
      }
      this.setState(this._log[idx]);
    }.bind(this), 1000);
  };

  _undo = function () {
    console.log('UNDO!');
    this._log.pop();
    this.setState(this._log[this._log.length - 1]);
  };

  componentDidMount = function() {
     document.onkeydown = function(e) {
       if (e.altKey && e.shiftKey && e.keyCode === 82) {
         this._replay();
       } else if (e.ctrlKey && e.keyCode === 90) {
         this._undo();
       } else if (e.ctrlKey && e.keyCode === 89) {
         console.log('REDO!');
       }
     }.bind(this);
   };

  _sort = function (e) {
    var column = e.target.cellIndex;
    var data = this.state.data.slice();
    var descending = this.state.sortby === column && !this.state.descending;
    data.sort(function (a, b) {
      return descending
        ? (a[column] < b[column] ? 1 : -1)
        : (a[column] > b[column] ? 1 : -1);
    });
    this.setState({
      data: data,
      sortby: column,
      descending: descending,
    });
  };

  _showEditor = function (e) {
    this.setState({edit: {
      row: parseInt(e.target.dataset.row, 10),
      cell: e.target.cellIndex
    }});
  };

  _save = function (e) {
    e.preventDefault();
    var input = e.target.firstChild;
    var data = this.state.data.slice();
    data[this.state.edit.row][this.state.edit.cell] = input.value;
    this.setState({
      edit: null,
      data: data,
    });
  };

  _preSearchData = null;

  _toggleSearch = function () {
    if (this.state.search) {
      this.setState({
        data: this._preSearchData,
        search: false,
      });
      this._preSearchData = null;
    } else {
      this._preSearchData = this.state.data;
      this.setState({
        search: true,
      });
    }
  };

  _search = function (e) {
    var needle = e.target.value.toLowerCase();
    if (!needle) {
      this.setState({data: this._preSearchData});
      return;
    }
    var idx = e.target.dataset.idx;
    var searchdata = this._preSearchData.filter(function (row) {
      return row[idx].toString().toLowerCase().indexOf(needle) > -1;
    });
    this.setState({data: searchdata});
  };

  _download = function(format, ev) {
     var contents = format === 'json'
       ? JSON.stringify(this.state.data)
       : this.state.data.reduce(function(result, row) {
           return result
             + row.reduce(function(rowresult, cell, idx) {
                 return rowresult
                   + '"'
                   + cell.replace(/"/g, '""')
                   + '"'
                   + (idx < row.length - 1 ? ',' : '');
               }, '')
             + "\n";
         }, '');
     var URL = window.URL || window.webkitURL;
     var blob = new Blob([contents], {type: 'text/' + format});
     ev.target.href = URL.createObjectURL(blob);
     ev.target.download = 'data.' + format;
   };

  _renderToolbar = function () {
    const btnStyle = {
      margin: '10px'
    };
    return (
      <div>
        <button onClick={this._toggleSearch}
          className='btn btn-primary'
          style={btnStyle}>Search</button>
        <a onClick={this._download.bind(this, 'json')}
          href="data.json"
            className='btn btn-primary'
            style={btnStyle}>Export JSON</a>
        <a onClick={this._download.bind(this, 'csv')}
          href="data.csv"
            className='btn btn-primary'
            style={btnStyle}>Export CSV</a>
      </div>
    );
  };

  _renderSearch = function () {
    if (!this.state.search) {
      return null;
    }
    return (
      <tr onChange={this._search}>
        {this.props.headers.map(function (_ignore, idx) {
          return <td key={idx}><input type="text" data-idx={idx}/></td>;
        })}
      </tr>
    );
  };

  _renderTable = function () {
    return (
      <table className='table table-striped table-hover'>
        <thead onClick={this._sort}>
          <tr>{
              this.props.headers.map(function (title, idx) {
                if (this.state.sortby === idx) {
                  title += this.state.descending ? ' \u2191' : ' \u2193';
                }
                return <th key={idx}>{title}</th>;
              }, this)
            }
          </tr>
        </thead>
        <tbody onDoubleClick={this._showEditor}>
          {this._renderSearch()}
          {this.state.data.map(function (row, rowidx) {
            return (
              <tr key={rowidx}>{
                  row.map(function (cell, idx) {
                    let content = cell;
                    let edit = this.state.edit;
                    if (edit && edit.row === rowidx && edit.cell === idx) {
                      // eslint-disable-next-line
                      let content = (
                        <form onSubmit={this._save}>
                          <input type='text' defaultValue={cell} />
                        </form>
                      );
                    }
                    return <td key={idx} data-row={rowidx}>{content}</td>;
                }, this)}
              </tr>
            );
          }, this)}
        </tbody>
      </table>
    )
  };

  render = function () {
    return (
      <div className="Sheets container">
        {this._renderToolbar()}
        {this._renderTable()}
      </div>
    );
  };

};

Sheets.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.string
  ),
  initialData: PropTypes.arrayOf(
    PropTypes.array
  )
};

export default Sheets;
