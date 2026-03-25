type IconProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function SingleIcon({ Icon }: IconProps) {
  return (
    <div className="cursor-pointer group">
      <Icon className="w-6 h-6 text-darkGray group-hover:text-background active:text-primary transition" />
    </div>
  );
}
