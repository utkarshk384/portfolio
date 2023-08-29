import Image from "next/image";
import React from "react";

export type Props = {
  height?: number;
  width?: number;
};

export type TechIconType = keyof typeof TechIcon;

export const TechIcon = () => {
  return <></>;
};

const DefaultProps = (
  props: Props,
  defaultHeight: number,
  defaultWidth: number
) => {
  const newProps = {
    ...props,
    height: props.height || defaultHeight,
    width: props.width || defaultWidth,
  };
  return newProps;
};

const ExpressIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return (
    <Image src="/technologies/express.png" alt="Express JS Icon" {...rest} />
  );
};

const AWSIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return <Image src="/technologies/aws.png" alt="AWS Icon" {...rest} />;
};

const CPPIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return <Image src="/technologies/cpp.png" alt="C++ Icon" {...rest} />;
};

const DjangoIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return <Image src="/technologies/django.png" alt="Django Icon" {...rest} />;
};

const GoIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return <Image src="/technologies/golang.png" alt="Go lang Icon" {...rest} />;
};

const JavascriptIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return <Image src="/technologies/js.png" alt="Javascript Icon" {...rest} />;
};

const MysqlIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return <Image src="/technologies/mysql.png" alt="Mysql Icon" {...rest} />;
};

const NextJSIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return <Image src="/technologies/nextjs.png" alt="NextJS Icon" {...rest} />;
};

const NodeJSIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return <Image src="/technologies/node.png" alt="NodeJS Icon" {...rest} />;
};

const PythonIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return <Image src="/technologies/python.png" alt="Python Icon" {...rest} />;
};

const ReactIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return <Image src="/technologies/react.png" alt="React Icon" {...rest} />;
};

const SCSSIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return <Image src="/technologies/scss.png" alt="SCSS Icon" {...rest} />;
};

const StrapiIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return <Image src="/technologies/strapi.png" alt="Strapi Icon" {...rest} />;
};

const TailwindIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return (
    <Image src="/technologies/tailwind.png" alt="Tailwind CSS Icon" {...rest} />
  );
};

const TypescriptIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return (
    <Image src="/technologies/typescript.png" alt="Typescript Icon" {...rest} />
  );
};

TechIcon.Express = ExpressIcon;
TechIcon.AWS = AWSIcon;
TechIcon.CPP = CPPIcon;
TechIcon.Django = DjangoIcon;
TechIcon.Go = GoIcon;
TechIcon.Javascript = JavascriptIcon;
TechIcon.Mysql = MysqlIcon;
TechIcon.NextJS = NextJSIcon;
TechIcon.NodeJS = NodeJSIcon;
TechIcon.Python = PythonIcon;
TechIcon.React = ReactIcon;
TechIcon.SCSS = SCSSIcon;
TechIcon.Strapi = StrapiIcon;
TechIcon.Tailwind = TailwindIcon;
TechIcon.Typescript = TypescriptIcon;
