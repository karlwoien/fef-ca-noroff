export default function Nav () {
    return (
        <nav>
            <ul className="flex items-center space-x-4">
                <li>
                    <a href="/" className="text-white hover:text-red-500 transition-colors">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/contact" className="text-white hover:text-red-500 transition-colors">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};