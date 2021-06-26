/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode, HTMLAttributes, forwardRef } from 'react';

import { idCreator } from '../../../services/idCreator';
import { ReactComponent as Check } from '../../../assets/svg/check.svg';

import { CheckboxIcon, CheckboxDiv, CheckboxInput, CheckIcon } from './styles';

type BaseCheckboxProps = Omit<HTMLAttributes<HTMLInputElement>, 'type'>;

interface CheckboxProps extends BaseCheckboxProps {
  icon?: ReactNode;
}

const ids = idCreator();

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ icon, className, ...props }, ref) => {
    const id = `checkbox-${ids.next().value}`;

    return (
      <label className={className} htmlFor={id}>
        <CheckboxInput id={id} type="checkbox" {...props} ref={ref} />
        {!icon ? (
          <CheckboxDiv>
            <CheckIcon>
              <Check />
            </CheckIcon>
          </CheckboxDiv>
        ) : (
          <CheckboxIcon>{icon}</CheckboxIcon>
        )}
      </label>
    );
  },
);

export default Checkbox;
