import { Icon } from "@iconify/react/dist/iconify.js";

const Breadcrumb = ({ pageNames, pageUrls }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-sm">
      <nav className="text-gray-500" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          {pageNames?.map((name, index) => (
            <li key={index} className="flex items-center">
              {index < pageNames?.length - 1 ? (
                <>
                  <a href={pageUrls[index]} className="text-black text-14">
                    {name}
                  </a>
                  <Icon icon="tabler:slash" />
                </>
              ) : (
                <span className="text-gray-500 text-14">{name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
