import { MdOutlineArrowForwardIos } from "react-icons/md";

function FAQ() {
  return (
    <div className="faq">
      <div className="max-w-[1320px] w-full mx-auto">
        <div className="faq-page">
          <section className="text-center pt-20 pb-12">
            <h1 className="text-[54px] font-bold">HYPERAS FAQ</h1>
          </section>
          <div class="flex justify-center">
            <div class="w-2/3">
              <div class="search position-relative">
                <input type="text" class="form-control" placeholder="Search" />
                <i class="fas fa-search"></i>
              </div>
            </div>
          </div>
        </div>

        <section class="py-[50px] relative">
          <div class="flex justify-between">
            <div class="w-1/4">
              <div class="filterElement">
                <h3 class="mb-6">
                  <span class="text-gradient faq-category text-[30px] font-medium">
                    Category
                  </span>
                </h3>
                <ul class="list-unstyled">
                  <li className="my-[40px] font-semibold text-[16px]">
                    <a href="#">Most Popular</a>
                  </li>
                  <li className="my-[40px] font-semibold text-[16px]">
                    <a href="">Technology</a>
                  </li>
                  <li className="my-[40px] font-semibold text-[16px]">
                    <a href="">Community</a>
                  </li>
                  <li className="my-[40px] font-semibold text-[16px]">
                    <a href="">Team</a>
                  </li>
                  <li className="my-[40px] font-semibold text-[16px]">
                    <a href="">Others</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-3/4">
              <div class="">
                <h3 class="text-gradient text-[30px] font-medium">
                  Technology
                </h3>
                <div class="accordion accordion-flush" id="accordionTechnology">
                  <div class="accordion-item">
                    <div
                      class="accordion-button collapsed flex items-center justify-between"
                      type="button"
                      // data-bs-toggle="collapse"
                      // data-bs-target="#flush-collapseOne"
                      // aria-expanded="false"
                      // aria-controls="flush-collapseOne"
                    >
                      <h4>What is Hyperas?</h4>
                      <MdOutlineArrowForwardIos className="more" />
                    </div>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionTechnology"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the first
                        item&rsquo;s accordion body.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <div
                      class="accordion-button collapsed flex items-center justify-between"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      <h4>Why do we need Hyperas?</h4>
                      <MdOutlineArrowForwardIos className="more" />
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionTechnology"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the second
                        item&rsquo;s accordion body. Let&rsquo;s imagine this
                        being filled with some actual content.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <div
                      class="accordion-button collapsed flex items-center justify-between"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      <h4>How many chains can Hyperas connect?</h4>
                      <MdOutlineArrowForwardIos className="more" />
                    </div>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionTechnology"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the third
                        item&rsquo;s accordion body. Nothing more exciting
                        happening here in terms of content, but just filling up
                        the space to make it look, at least at first glance, a
                        bit more representative of how this would look in a
                        real-world application.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <div
                      class="accordion-button collapsed flex items-center justify-between"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse4"
                      aria-expanded="false"
                      aria-controls="flush-collapse4"
                    >
                      <h4>Can Hyperas connect any blockchain?</h4>
                      <MdOutlineArrowForwardIos className="more" />
                    </div>
                    <div
                      id="flush-collapse4"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-heading4"
                      data-bs-parent="#accordionTechnology"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the third
                        item&rsquo;s accordion body. Nothing more exciting
                        happening here in terms of content, but just filling up
                        the space to make it look, at least at first glance, a
                        bit more representative of how this would look in a
                        real-world application.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <div
                      class="accordion-button collapsed flex items-center justify-between"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse5"
                      aria-expanded="false"
                      aria-controls="flush-collapse5"
                    >
                      <h4> At what stage is development now?</h4>
                      <MdOutlineArrowForwardIos className="more" />
                    </div>
                    <div
                      id="flush-collapse5"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-heading5"
                      data-bs-parent="#accordionTechnology"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the third
                        item&rsquo;s accordion body. Nothing more exciting
                        happening here in terms of content, but just filling up
                        the space to make it look, at least at first glance, a
                        bit more representative of how this would look in a
                        real-world application.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <div
                      class="accordion-button collapsed flex items-center justify-between"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse6"
                      aria-expanded="false"
                      aria-controls="flush-collapse6"
                    >
                      <h4>When did Hyperas launch?</h4>
                      <MdOutlineArrowForwardIos className="more" />
                    </div>
                    <div
                      id="flush-collapse6"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-heading6"
                      data-bs-parent="#accordionTechnology"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the third
                        item&rsquo;s accordion body. Nothing more exciting
                        happening here in terms of content, but just filling up
                        the space to make it look, at least at first glance, a
                        bit more representative of how this would look in a
                        real-world application.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center my-6">
                  <a href="#" class="text-uppercase">
                    SEE MORE
                  </a>
                </div>
              </div>
              <div class="">
                <p class="text-gradient text-[30px] font-medium">Community</p>
                <div class="accordion accordion-flush" id="accordionCommunity">
                  <div class="accordion-item">
                    <div
                      class="accordion-button collapsed flex items-center justify-between"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse7"
                      aria-expanded="false"
                      aria-controls="flush-collapse7"
                    >
                      <h4>How can i join the community?</h4>
                      <MdOutlineArrowForwardIos className="more" />
                    </div>
                    <div
                      id="flush-collapse7"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-heading7"
                      data-bs-parent="#accordionCommunity"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the first
                        item&rsquo;s accordion body.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <div
                      class="accordion-button collapsed  flex items-center justify-between"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse8"
                      aria-expanded="false"
                      aria-controls="flush-collapse8"
                    >
                      <h4>Why do we need Hyperas?</h4>
                      <MdOutlineArrowForwardIos className="more" />
                    </div>
                    <div
                      id="flush-collapse8"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-heading8"
                      data-bs-parent="#accordionCommunity"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the second
                        item&rsquo;s accordion body. Let&rsquo;s imagine this
                        being filled with some actual content.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center my-6">
                  <a href="#" class="text-uppercase">
                    SEE MORE
                  </a>
                </div>
              </div>
              <div class="">
                <p class="text-gradient text-[30px] font-medium">Team</p>
                <div class="accordion accordion-flush" id="accordionTeam">
                  <div class="accordion-item">
                    <div
                      class="accordion-button collapsed  flex items-center justify-between"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse9"
                      aria-expanded="false"
                      aria-controls="flush-collapse9"
                    >
                      <h4>Who is building Hyperas?</h4>
                      <MdOutlineArrowForwardIos className="more" />
                    </div>
                    <div
                      id="flush-collapse9"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-heading9"
                      data-bs-parent="#accordionTeam"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the first
                        item&rsquo;s accordion body.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <div
                      class="accordion-button collapsed flex items-center justify-between"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse10"
                      aria-expanded="false"
                      aria-controls="flush-collapse10"
                    >
                      <h4>Who can I contact regarding a press inquiry?</h4>
                      <MdOutlineArrowForwardIos className="more" />
                    </div>
                    <div
                      id="flush-collapse10"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-heading10"
                      data-bs-parent="#accordionTeam"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the second
                        item&rsquo;s accordion body. Let&rsquo;s imagine this
                        being filled with some actual content.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center my-6">
                  <a href="#" class="text-uppercase">
                    SEE MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FAQ;
