import { useRef } from "react";

const Stellenangebote = () => {
  // ===== This is an explanation to how refs work and why we should use them for selecting things in the dom ==
  // Long answer
  // Usually any time you want to access something related to the DOM or the window object, your first thought when using React should be Refs.

  // Here, React docs give you a nice list of when to use Refs:
  // https://react.dev/learn/referencing-values-with-refs#when-to-use-refs

  // Quoting the docs:
  // Typically, you will use a ref when your component needs to “step outside”
  // React and communicate with external APIs—often a browser API that won’t impact the appearance of the component.

  const myModal = useRef<HTMLDialogElement>(null);
  const myModalTwo = useRef<HTMLDialogElement>(null);

  return (
    <div className="content-wrapper">
      <section className="content-section">
        <h1>Stellenangebote</h1>
        <div className="flex flex-col items-center gap-2 mt-6">
          <div>
            <button onClick={() => myModal.current?.showModal()}>
              <img
                src="/public/assets/images/stellenangebote/Hauswirtschaft2024_b.jpg"
                width={600}
                height={600}
              />
            </button>
            <dialog className="modal" ref={myModal}>
              <div className="modal-box !max-w-4xl">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <img
                  src="/public/assets/images/stellenangebote/Hauswirtschaft2024_b.jpg"
                  width={800}
                  height={800}
                />
              </div>
            </dialog>
          </div>
          <div>
            <button onClick={() => myModalTwo.current?.showModal()}>
              <img
                src="/public/assets/images/stellenangebote/Koch_2024_b.jpg"
                width={600}
                height={600}
              />
            </button>
            <dialog className="modal" ref={myModalTwo}>
              <div className="modal-box !max-w-4xl">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <img
                  src="/public/assets/images/stellenangebote/Koch_2024_b.jpg"
                  width={800}
                  height={800}
                />
              </div>
            </dialog>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stellenangebote;
