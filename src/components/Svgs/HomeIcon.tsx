// components/HomeIcon.tsx
interface HomeIconProps {
  isActive: boolean;
}

const HomeIcon = ({ isActive }: HomeIconProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill={isActive ? "currentColor" : "none"} xmlns="http://www.w3.org/2000/svg">
    <path d="M7.51663 2.36713L3.02496 5.86713C2.27496 6.45046 1.66663 7.69213 1.66663 8.63379V14.8088C1.66663 16.7421 3.24163 18.3255 5.17496 18.3255H14.825C16.7583 18.3255 18.3333 16.7421 18.3333 14.8171V8.75046C18.3333 7.74213 17.6583 6.45046 16.8333 5.87546L11.6833 2.26713C10.5166 1.45046 8.64163 1.49213 7.51663 2.36713Z" stroke="#9DB2CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14.9912V12.4912" stroke="#9DB2CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default HomeIcon;
