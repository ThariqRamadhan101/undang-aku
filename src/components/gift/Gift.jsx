/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import { FaCopy } from "react-icons/fa";
import OCBCLogo from "../../assets/ocbc-logo.jpg";
import BNILogo from "../../assets/bni-logo.png";
import BRILogo from "../../assets/bri-logo.png";
import gopayLogo from "../../assets/gopay-logo.jpg";
import PagePagination from "../pagePagination/PagePagination";

const Gift = forwardRef((props, ref) => {
  const AddressCopyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Alamat berhasil disalin:\n" + text);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const BankAccountCopyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("No Akun berhasil disalin:\n" + text);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const BankAccountCard = ({ accountLogo, accountNumber, accountType }) => {
    return (
      <div
        className="border p-4 rounded-lg mb-4 flex items-center justify-between bg-white"
        onClick={() => BankAccountCopyToClipboard(accountNumber)}
      >
        <img src={accountLogo} alt="Bank Logo" className="w-10" />
        <div className="flex items-center justify-center">
          <div>
            <h3 className="text-xs font-semibold">{accountType}:</h3>
            <p className="text-xs font-semibold">{accountNumber}</p>
          </div>
        </div>
        <FaCopy className="cursor-pointer text-gray-500 min-w-4" />
      </div>
    );
  };

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-8 border bg-[#F4ECE8] border-gray-300 shadow-lg h-full w-full"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold mb-5 font-playfair">
          Hadiah Pernikahan
        </h1>
        {/* Small Line Divider */}
        <div className="w-20 h-[1px] bg-gray-400 mb-5"></div>

        <div className="mb-2">
          <h2 className="text-xl font-semibold mb-4 font-playfair">
            Transfer Bank / E-Wallet
          </h2>
          <BankAccountCard
            accountLogo={OCBCLogo}
            accountNumber="6938-1398-9623"
            accountType="Thariq Ramadhan"
          />
          <BankAccountCard
            accountLogo={BNILogo}
            accountNumber="0455053170"
            accountType="Thariq Ramadhan"
          />
          <BankAccountCard
            accountLogo={BRILogo}
            accountNumber="5460-0101-3623-539"
            accountType="Sherly Ekaputri"
          />
          <BankAccountCard
            accountLogo={gopayLogo}
            accountNumber="081266654235"
            accountType="Sherly Ekaputri"
          />
        </div>
        {/* Small Line Divider */}
        <div className="w-20 h-[1px] bg-gray-400 mb-2"></div>
        <div>
          <h2 className="text-xl font-semibold m-4 font-playfair">
            Kirim ke Alamat
          </h2>
          <div
            className="border bg-white p-3 rounded-lg mb-4 flex items-center justify-between text-xs"
            onClick={() =>
              AddressCopyToClipboard(
                "Rumah Keluarga Sherly, JL. A R Hakim Balai-Balai RT 22, Padang Panjang Barat"
              )
            }
          >
            <p>
              Rumah Keluarga Sherly, JL. A R Hakim
              <br />
              Balai-Balai RT 22, Padang Panjang Barat
            </p>
            <FaCopy className="cursor-pointer text-gray-500 ml-2" />
          </div>
        </div>
      </div>
      <PagePagination />
    </div>
  );
});

Gift.displayName = "Gift";
export default Gift;
