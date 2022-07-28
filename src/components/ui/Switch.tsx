import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { optionsActions } from '../../store/optionsReducer';

export default function Switch() {
  const dispach = useDispatch();
  function optionsHandler() {
    dispach(optionsActions.changeState());
  }
  const newTab = useSelector((state: RootState) => state.optionsReducer.newTab)

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={newTab}
            readOnly
          />
          <div
            onClick={() => {
              optionsHandler()
            }}
            className=" after:absolute after:top-0.5 after:left-[2px] w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
          ></div>
        </label>
      </div>
    </div>
  )
}
