type tProps = {
  mainTitle: string;
  subTitle: string;
};

function ContentTitle(props: tProps) {
  return (
    <section>
      <h1 className="leading-[2rem] text-[2rem] text-[#4d7fb3] font-[400]">{props.mainTitle}</h1>
      <h3 className="leading-[1.5rem] text-[1.2rem] mt-[3px] text-[#505050] font-[100]">
        {props.subTitle}
      </h3>
    </section>
  );
}

export default ContentTitle;
