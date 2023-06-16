import { FaEye, FaDownload } from "react-icons/fa";

function BrandKit() {
  return (
    <div className="brandKit">
      <div className="max-w-[1320px] w-full mx-auto">
        <section className="text-center pt-20">
          <h1 className="text-[54px] font-bold">Brand Kit</h1>
        </section>
        <section className="py-[50px]">
          <div className="flex flex-wrap">
            <div className="w-1/2 px-[12px] pb-6">
              <div className="bg-[#1c2f39] border-[3px] border-[#2b4958] px-[15px] rounded-lg shadow-[0_4px_16px_#0000001a]">
                <h5 className="titleBrandkit text-[22px] font-semibold">
                  Branding guideline
                </h5>
                <table className="table text-white mb-0 w-full">
                  <tbody>
                    <tr className="flex justify-between">
                      <td className="font-semibold">
                        Logo PNG 1900x1900 Vertical
                      </td>
                      <td className="flex items-center">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#previewLogoVerticalModal"
                        >
                          <FaEye />
                        </a>
                        <a
                          download="logo-1900x1900-vertical.png"
                          href="https://dev.hyperaschain.com/img/logo-1900x1900-vertical.png"
                          title="logo-1900x1900-vertical"
                        >
                          <FaDownload />
                        </a>
                      </td>
                    </tr>
                    <tr className="flex justify-between">
                      <td className="font-semibold">
                        Logo PNG 1900x1900 Horizonal
                      </td>
                      <td className="flex items-center">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#previewLogoHorizontalModal"
                        >
                          <FaEye />
                        </a>
                        <a
                          download="logo-1900x1900-horizontal.png"
                          href="https://dev.hyperaschain.com/img/logo-1900x1900-horizontal.png"
                          title="logo-1900x1900-horizontal"
                        >
                          <FaDownload />
                        </a>
                      </td>
                    </tr>
                    <tr className="flex justify-between">
                      <td className="font-semibold">Branding Guidline</td>
                      <td className="flex items-center">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#previewBrandIdentityModal"
                        >
                          <FaEye />
                        </a>
                        <a
                          download="Brand_identity_HyperasChain_2022.pdf"
                          href="https://dev.hyperaschain.com/img/Brand_identity_HyperasChain_2022.pdf"
                          title="Brand_identity_HyperasChain_2022.pdf"
                        >
                          <FaDownload />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-1/2 px-[12px]">
              <div className="bg-[#1c2f39] border-[3px] border-[#2b4958] px-[15px] rounded-lg shadow-[0_4px_16px_#0000001a]">
                <h5 className="titleBrandkit text-[22px] font-semibold">
                  Marketing tools
                </h5>
                <table className="table text-white mb-0 w-full">
                  <tbody>
                    <tr className="flex justify-between">
                      <td className="font-semibold">Social Avatar</td>
                      <td className="flex items-center">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#previewSocialAvatarModal"
                        >
                          <FaEye />
                        </a>
                        <a
                          download="social-avatar.zip"
                          href="https://dev.hyperaschain.com/img/social-avatar.zip"
                          title="social-avatar.zip"
                        >
                          <FaDownload />
                        </a>
                      </td>
                    </tr>
                    <tr className="flex justify-between">
                      <td className="font-semibold">Cover Photo</td>
                      <td className="flex items-center">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#previewCoverPhotoModal"
                        >
                          <FaEye />
                        </a>
                        <a
                          download="cover-photo.zip"
                          href="https://dev.hyperaschain.com/img/cover-photo.zip"
                          title="cover-photo.zip"
                        >
                          <FaDownload />
                        </a>
                      </td>
                    </tr>
                    <tr className="flex justify-between">
                      <td className="font-semibold">Wallpapers</td>
                      <td className="flex items-center">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#previewWallpaperModal"
                        >
                          <FaEye />
                        </a>
                        <a
                          download="wallpaper.zip"
                          href="https://dev.hyperaschain.com/img/wallpaper.zip"
                          title="wallpaper.zip"
                        >
                          <FaDownload />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BrandKit;
