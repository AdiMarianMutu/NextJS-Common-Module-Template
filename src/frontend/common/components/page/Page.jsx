/* WRAPPER COMPONENT USED TO SET THE HEAD TAG INDIVIDUALLY FOR EACH PAGE */

import HeadTags from '@fcommon/components/wrappers/HeadTags';

export default function Home({headTags, children}) {
  return (
    <>
      {/* If you don't want to display the process.env.APP_NAME in the tab title, just pass the string with { / } in front */}
      <HeadTags tags={headTags} />
      {children}
    </>
  );
};