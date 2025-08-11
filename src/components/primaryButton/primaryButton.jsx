import classes from './primaryButton.module.css';

export default function PrimaryButton({ children, widthFull = true, onClick, bgTransparent = false }) {
  return (
    <div onClick={onClick}
      className={`relative ${widthFull ? 'w-full' : 'w-fit'} overflow-hidden border border-[#7453fc] px-7 py-3.5 rounded-full text-white cursor-pointer duration-300 text-xs font-semibold text-center ${classes.btn} ${bgTransparent ? 'bg-transparent hover:bg-[#7453fc]' : 'bg-[#7453fc] hover:bg-white hover:text-[#7453fc] hover:border-white'
        }`}
    >
      {children}
    </div>
  );
}
