import React from "react";
import Image from "next/image";

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

const DockerIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return <Image src="/technologies/docker.png" alt="Docker Icon" {...rest} />;
};

const JenkinsIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return <Image src="/technologies/jenkins.png" alt="Jenkins Icon" {...rest} />;
};

const KubernetesIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return (
    <Image src="/technologies/kubernetes.png" alt="Kubernetes Icon" {...rest} />
  );
};

const TerraformIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return (
    <Image src="/technologies/terraform.webp" alt="Terraform Icon" {...rest} />
  );
};

const NginxIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return <Image src="/technologies/nginx.png" alt="Nginx Icon" {...rest} />;
};

const AzureIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return <Image src="/technologies/azure.png" alt="Azure Icon" {...rest} />;
};

const ArgoCDIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return <Image src="/technologies/argocd.png" alt="ArgoCD Icon" {...rest} />;
};

const BashIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return <Image src="/technologies/bash.png" alt="Bash Icon" {...rest} />;
};

const HelmIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return <Image src="/technologies/helm.png" alt="Helm Icon" {...rest} />;
};

const PrometheusIcon: React.FC<Props> = (props) => {
  const rest = DefaultProps(props, 32, 32);
  return (
    <Image src="/technologies/prometheus.png" alt="Prometheus Icon" {...rest} />
  );
};

export const withTooltip = (
  Component: React.FC<Props>,
  tooltipText: string
) => {
  const ComponentWithTooltip: React.FC<Props> = (props) => {
    return (
      <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipText}>
        <Component {...props} />
      </div>
    );
  };

  return ComponentWithTooltip;
};

TechIcon.Express = withTooltip(ExpressIcon, "Express JS");
TechIcon.AWS = withTooltip(AWSIcon, "AWS");
TechIcon.CPP = withTooltip(CPPIcon, "C++");
TechIcon.Django = withTooltip(DjangoIcon, "Djano");
TechIcon.Go = withTooltip(GoIcon, "Golang");
TechIcon.Javascript = withTooltip(JavascriptIcon, "Javascript");
TechIcon.Mysql = withTooltip(MysqlIcon, "MySQL");
TechIcon.NextJS = withTooltip(NextJSIcon, "NextJS");
TechIcon.NodeJS = withTooltip(NodeJSIcon, "NodeJS");
TechIcon.Python = withTooltip(PythonIcon, "Python");
TechIcon.React = withTooltip(ReactIcon, "React JS");
TechIcon.SCSS = withTooltip(SCSSIcon, "SCSS");
TechIcon.Strapi = withTooltip(StrapiIcon, "Strapi CMS");
TechIcon.Tailwind = withTooltip(TailwindIcon, "Tailwind CSS");
TechIcon.Typescript = withTooltip(TypescriptIcon, "Typescript");
TechIcon.Docker = withTooltip(DockerIcon, "Docker");
TechIcon.Jenkins = withTooltip(JenkinsIcon, "Jenkins");
TechIcon.Kubernetes = withTooltip(KubernetesIcon, "Kubernetes");
TechIcon.Terraform = withTooltip(TerraformIcon, "Terraform");
TechIcon.Nginx = withTooltip(NginxIcon, "Nginx");
TechIcon.Azure = withTooltip(AzureIcon, "Azure");
TechIcon.ArgoCD = withTooltip(ArgoCDIcon, "ArgoCD");
TechIcon.Bash = withTooltip(BashIcon, "Bash");
TechIcon.Helm = withTooltip(HelmIcon, "Helm");
TechIcon.Prometheus = withTooltip(PrometheusIcon, "Prometheus");
