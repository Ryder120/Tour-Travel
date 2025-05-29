

const SearchBar = () => {
    return (

        <div className="w-full max-w-4xl mx-auto bg-white rounded-[12px] shadow flex items-center px-4 py-2 mt-8 border border-blue-200">
            {/* Location */}
            <div className="flex items-center flex-1 min-w-0">
                <span className="text-teal-400 mr-2 text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c-2.21 0-4 1.79-4 4 0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.21-1.79-4-4-4z" />
                    </svg>
                </span>
                <div>
                    <div className="text-teal-400 font-semibold text-sm">Location</div>
                    <div className="text-gray-400 text-sm">Search For A Destination</div>
                </div>
            </div>

            {/* Divider */}
            <div className="h-10 w-px bg-gray-200 mx-6 hidden md:block" />

            {/* Guests */}
            <div className="flex items-center flex-1 min-w-0">
                <span className="text-teal-400 mr-2 text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 010 7.75" />
                    </svg>
                </span>
                <div>
                    <div className="text-teal-400 font-semibold text-sm">Guests</div>
                    <div className="text-gray-400 text-sm italic">How many Guests?</div>
                </div>
            </div>

            {/* Divider */}
            <div className="h-10 w-px bg-gray-200 mx-6 hidden md:block" />

            {/* Date */}
            <div className="flex items-center flex-1 min-w-0">
                <span className="text-teal-400 mr-2 text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <rect width="18" height="18" x="3" y="4" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </span>
                <div>
                    <div className="text-teal-400 font-semibold text-sm">Date</div>
                    <div className="text-gray-400 text-sm italic">Pick a date</div>
                </div>
            </div>

            {/* Search Button */}
            <button className="ml-6 bg-yellow-300 hover:bg-yellow-400 text-black font-semibold rounded-full px-8 py-2 shadow text-lg transition">
                Search
            </button>
        </div>

    )

}
export default SearchBar;