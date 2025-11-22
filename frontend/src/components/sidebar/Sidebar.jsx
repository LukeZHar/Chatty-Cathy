import SearchInput from "./SearchInput"
import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"

const Sidebar = () => {
	return (
		<div className='absolute left-0 top-0 bottom-0 border-r border-slate-500 p-2 md:p-4 flex flex-col w-16 md:w-64 bg-inherit z-10'>
			<div className='hidden md:block flex-shrink-0'>
				<SearchInput />
				<div className='divider px-3'></div>
			</div>
			<Conversations />
			<div className='flex-shrink-0'>
				<LogoutButton />
			</div>
		</div>
	);
};
export default Sidebar;