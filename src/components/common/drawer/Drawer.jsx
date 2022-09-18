// The drawer will have three buttons: view, edit and delete (in the header)
// The date will go in the header
// The body will take the the data
// The footer will be only displayed if we are in edit mode, and will contain a submit button to edit the info
// The drawer should be a reusable component (all above is for lead use only) receiving html content
// After clicking the delete button, a popup to confirm action should be displayed
// If the component doesn't want action buttons, it can just pass in a regular arrow instead. If the drawer is open, the arrow should point to the top, and the other way around
// A tooltip should be displayed when the button is hovered over
import PropTypes from 'prop-types';

const Drawer = ({
  header,
  content,
  footer,
  isOpen
}) => {
  return (
    <section className='drawer'>
      <header className='p-2 bg-grey border-dark'>
        {header}
      </header>
      {isOpen && (
        <main className='p-2 bg-light'>
          {content}
        </main>
      )}
      {footer && (
        <footer className='p-2 bg-grey'>
          {footer}
        </footer>
      )}
    </section>
  );
};

Drawer.propTypes = {
  header: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  footer: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]),
  isOpen: PropTypes.bool
};

Drawer.defaultProps = {
  isOpen: false
};

export default Drawer;