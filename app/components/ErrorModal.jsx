var React = require('react');
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
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
    $('#confirm').focus();
  },
  render: function() {
    var {title, message} = this.props;
    // capitalize error message for a cleaner UI
    message = message.charAt(0).toUpperCase() + message.slice(1);

    return (
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
  }
});

module.exports = ErrorModal;
