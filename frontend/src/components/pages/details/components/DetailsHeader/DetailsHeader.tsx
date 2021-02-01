import { MutableRefObject } from 'react';
import { FormattedMessage } from 'react-intl';
import { sizes } from 'stylesheet';
import { DetailsHeaderSection } from '../../useDetails';
import { useDetailsHeader } from './useDetailsHeader';

interface DetailsHeaderProps {
  sectionsReferences: MutableRefObject<DetailsHeaderSection>;
  downloadUrl?: string;
}

const scrollTo = (element: HTMLDivElement | undefined | null) => {
  if (element !== null && element !== undefined) {
    const adjustedPosition =
      element.offsetTop +
      window.innerHeight -
      (sizes.desktopHeader + sizes.detailsHeaderDesktop) -
      sizes.scrollOffsetBeforeElement;
    window.scrollTo({ top: adjustedPosition, behavior: 'smooth' });
  }
};

export const DetailsHeader: React.FC<DetailsHeaderProps> = ({
  sectionsReferences,
  downloadUrl,
}) => {
  const { detailsHeaderSection } = useDetailsHeader(sectionsReferences);
  return (
    <div
      className="hidden desktop:flex justify-between
      sticky top-desktopHeader z-header
      px-12
      shadow-md bg-white"
    >
      <div className="flex space-x-12 pb-2.5 pt-4">
        {(Object.keys(detailsHeaderSection) as Array<keyof DetailsHeaderSection>).map(sectionId => (
          <div
            onClick={() => scrollTo(detailsHeaderSection[sectionId])}
            key={sectionId}
            className="hover:text-primary1
            pb-1 border-b-2 hover:border-primary1 border-transparent border-solid
            cursor-pointer transition-all duration-300"
          >
            <FormattedMessage id={`details.${sectionId}`} />
          </div>
        ))}
      </div>
      {downloadUrl !== undefined && <DownloadButton url={downloadUrl} />}
    </div>
  );
};

const DownloadButton: React.FC<{ url: string }> = ({ url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full py-2 px-4 my-2
    border-primary1 border-solid border
      cursor-pointer
    text-primary1 font-bold
    hover:border-primary1-light hover:shadow-sm hover:text-primary1-light transition-all"
  >
    <FormattedMessage id={'details.download'} />
  </a>
);
