import React from "react";
import ButtonLink from "components/ButtonLink";

export default {
  title: `Components/ButtonLink`,
  component: ButtonLink,
  args: {
    label: "Button",
    to: "#",
    variant: ButtonLink.variant.PRIMARY,
    className: "",
  },
};

const Template = (args) => <ButtonLink {...args} />;

export const Primary = Template.bind({});

export const Strong = Template.bind({});
Strong.args = {
  variant: ButtonLink.variant.STRONG,
};
