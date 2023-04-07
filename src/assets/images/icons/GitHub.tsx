import React from 'react'
import { SystemProps, x } from '@xstyled/emotion';

interface GitHunProps {
  color?:string,
}
// (property) FillProps < T extends ITheme = Theme >.
//   fill ?: (SystemProp<string | number | true | symbol | {} | (string & {}), Theme> & string) | undefined

export const GitHub:React.FC<GitHunProps> = ({color='#ffffff',...systemProps }) => {
  return (
    <x.svg {...systemProps} w="30" h="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <x.path  fill={color} d="M9.92455 23.5801C9.92455 23.6985 9.78845 23.7932 9.61686 23.7932C9.4216 23.8109 9.2855 23.7162 9.2855 23.5801C9.2855 23.4618 9.4216 23.3671 9.59319 23.3671C9.7707 23.3494 9.92455 23.444 9.92455 23.5801ZM8.08434 23.3139C8.04292 23.4322 8.16126 23.5683 8.33877 23.6038C8.49262 23.663 8.67013 23.6038 8.70563 23.4855C8.74113 23.3671 8.62871 23.231 8.4512 23.1778C8.29735 23.1364 8.12576 23.1955 8.08434 23.3139ZM10.6997 23.2133C10.5281 23.2547 10.4097 23.3671 10.4275 23.5032C10.4452 23.6216 10.5991 23.6985 10.7766 23.6571C10.9482 23.6156 11.0665 23.5032 11.0488 23.3849C11.031 23.2725 10.8713 23.1955 10.6997 23.2133ZM14.5931 0.539062C6.38614 0.539062 0.108124 6.76974 0.108124 14.9767C0.108124 21.5388 4.23824 27.1541 10.1376 29.1304C10.8949 29.2664 11.1612 28.799 11.1612 28.4144C11.1612 28.0475 11.1435 26.0239 11.1435 24.7813C11.1435 24.7813 7.00151 25.6689 6.1317 23.018C6.1317 23.018 5.45716 21.2962 4.48676 20.8524C4.48676 20.8524 3.13175 19.9234 4.58143 19.9411C4.58143 19.9411 6.05478 20.0595 6.86542 21.4677C8.16126 23.7517 10.3328 23.0949 11.179 22.7044C11.3151 21.7577 11.6997 21.1009 12.1257 20.7104C8.81805 20.3435 5.48083 19.8642 5.48083 14.172C5.48083 12.5448 5.93052 11.7282 6.87725 10.6868C6.72341 10.3022 6.22046 8.71646 7.0311 6.66915C8.26777 6.28454 11.1139 8.26676 11.1139 8.26676C12.2973 7.9354 13.5695 7.76381 14.8298 7.76381C16.0901 7.76381 17.3623 7.9354 18.5457 8.26676C18.5457 8.26676 21.3918 6.27862 22.6285 6.66915C23.4391 8.72237 22.9362 10.3022 22.7823 10.6868C23.7291 11.7342 24.3089 12.5507 24.3089 14.172C24.3089 19.882 20.8238 20.3376 17.5162 20.7104C18.0605 21.1778 18.5221 22.0654 18.5221 23.4559C18.5221 25.4499 18.5043 27.9174 18.5043 28.4026C18.5043 28.7872 18.7765 29.2546 19.528 29.1185C25.445 27.1541 29.4568 21.5388 29.4568 14.9767C29.4568 6.76974 22.8001 0.539062 14.5931 0.539062ZM5.85952 20.947C5.7826 21.0062 5.80035 21.1423 5.90094 21.2547C5.99561 21.3494 6.1317 21.3908 6.20863 21.3139C6.28555 21.2547 6.2678 21.1186 6.16721 21.0062C6.07253 20.9115 5.93644 20.8701 5.85952 20.947ZM5.22047 20.4678C5.17905 20.5447 5.23823 20.6394 5.35657 20.6985C5.45124 20.7577 5.56958 20.7399 5.611 20.6571C5.65242 20.5802 5.59325 20.4855 5.47491 20.4263C5.35657 20.3908 5.26189 20.4086 5.22047 20.4678ZM7.13761 22.5742C7.04293 22.6512 7.07843 22.8287 7.21453 22.9411C7.35062 23.0772 7.52222 23.0949 7.59914 23.0003C7.67606 22.9233 7.64056 22.7458 7.52222 22.6334C7.39204 22.4973 7.21453 22.4796 7.13761 22.5742ZM6.46306 21.7044C6.36839 21.7636 6.36839 21.9174 6.46306 22.0535C6.55773 22.1896 6.71749 22.2488 6.79442 22.1896C6.88909 22.1127 6.88909 21.9589 6.79442 21.8228C6.71158 21.6867 6.55773 21.6275 6.46306 21.7044Z"/>
    </x.svg>
  )
}