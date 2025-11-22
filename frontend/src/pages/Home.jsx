import Sidebar from "../components/sidebar/Sidebar.jsx"
import MessageContainer from "../components/messages/MessageContainer.jsx"

const Home = () => {
	return (
		<div className='relative flex h-screen md:h-[550px] w-screen md:w-auto md:rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;