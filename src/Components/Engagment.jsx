import { FaRegLightbulb, FaNetworkWired } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function EngagementSection() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-16 p-12">
    <div className="text-center max-w-sm">
      <FaNetworkWired className="text-gray-900 text-7xl sm:text-8xl mx-auto" />
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-5">Connect</h3>
      <p className="text-lg sm:text-xl text-black mt-3">
        with world-class speakers who will share insights on the industry's major developments.
      </p>
    </div>

    <div className="text-center max-w-sm">
      <HiOutlineLocationMarker className="text-gray-900 text-7xl sm:text-8xl mx-auto" />
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-5">Network</h3>
      <p className="text-lg sm:text-xl text-black mt-3">
        with institutional investors, crypto-forward institutions, members of the press, and corporate, regulatory, and policy leaders.
      </p>
    </div>

    <div className="text-center max-w-sm">
      <FaRegLightbulb className="text-gray-900 text-7xl sm:text-8xl mx-auto" />
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-5">Discuss</h3>
      <p className="text-lg sm:text-xl text-black mt-3">
        the current state of the cryptoeconomy plus the developments that are propelling the industry and the financial system forward.
      </p>
    </div>
  </div>
  );
}
