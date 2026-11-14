import PropTypes from 'prop-types';
import HavenNavbar from './HavenNavbar';
import HavenFooter from './HavenFooter';
import HavenDemoModal from './HavenDemoModal';

export default function HavenLayout({ brand, navigation, children }) {
  return (
    <div className="min-h-screen flex flex-col bg-haven-bg text-haven-deep">
      <HavenDemoModal />
      <HavenNavbar brand={brand} navigation={navigation} />
      <main className="flex-grow">{children}</main>
      <HavenFooter brand={brand} navigation={navigation} />
    </div>
  );
}

HavenLayout.propTypes = {
  brand: PropTypes.object.isRequired,
  navigation: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};
