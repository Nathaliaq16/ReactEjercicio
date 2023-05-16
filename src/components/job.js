import React from "react";
import {FormattedDate, FormattedMessage, FormattedNumber, FormattedPlural} from 'react-intl';

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>
        <FormattedMessage id={props.offer.name}/></td>
      <td>
      <FormattedMessage id={props.offer.company}/></td>
      <td> 
        <FormattedNumber
        value={props.offer.salary}
        />
        <FormattedPlural
        value={props.offer.salary}
        one={<FormattedMessage id=" million" />}
        other={<FormattedMessage id=" millions" />}
        />
      </td>
      <td>
      <FormattedMessage id={props.offer.city}/></td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumber
        value={(props.offer.numero)}
        />
      </td>
    </tr>
  );
};

export default Job;
