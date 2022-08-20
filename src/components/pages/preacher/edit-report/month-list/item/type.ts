export default interface Props {
  current?: boolean;
  returned?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
