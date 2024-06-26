import PropType from "prop-types";

export default function HeaderDisplay({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="container-fluid page-header py-5">
      <div className="container text-center py-5">
        <h1 className="display-2 text-white mb-4 animated slideInDown">
          {title}
        </h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <p className="breadcrumb breadcrumb-item justify-content-center mb-0">
            {desc}
          </p>
        </nav>
      </div>
    </div>
  );
}

HeaderDisplay.propTypes = {
  title: PropType.string,
  desc: PropType.string,
};
