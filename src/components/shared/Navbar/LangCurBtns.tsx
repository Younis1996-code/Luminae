import Dropdown from '@/components/ui/Dropdown'
import React from 'react'

const currency: string[] = ['USD', 'EUR', 'GBP', 'INR', 'JPY', 'CNY', 'KRW'];
const lang: string[] = ['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese'];

const LangCurBtns = ({aside}: {aside?: boolean}) => {
  return (
    <div className={`flex ${aside ? "flex-col" : "gap-4 flex-row items-center"}`}>
            <div className={aside ? "p-3" : ""}>
              <Dropdown data={currency} />
            </div>
            <div className={aside ? "p-3" : ""}>
              <Dropdown data={lang} />
            </div>
        </div>
  )
}

export default LangCurBtns
