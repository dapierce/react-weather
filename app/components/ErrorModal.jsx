var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var PropTypes = require('prop-types');

var ErrorModal = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Oh No'
    }
  },
  propTypes: {
    title: PropTypes.string,
    message: PropTypes.string.isRequired
  },
  componentDidMount: function() {
    var {title, message} = this.props;

    // capitalize error message for a cleaner UI
    message = message.charAt(0).toUpperCase() + message.slice(1);

    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button id="confirm" className="button hollow" data-close="">
            Ok
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
    $('#confirm').focus();
  },
  render: function() {
    return (
      <div></div>
    )
  }
});

module.exports = ErrorModal;
