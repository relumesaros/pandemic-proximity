import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
import CloseIcon from '@material-ui/icons/Close';
import withStyles from '@material-ui/core/es/styles/withStyles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {
  ButtonBlueFilled,
  ContainerWrapper,
  Title18,
  Title24,
} from './CommonComponent';
import toastrService from '../service/toastrService';

const ButtonsWrapper = styled.div`
  margin: 10px 0;
  width: 70%;
`;

const styles = {
  root: {
    margin: '40px 0 0 5%',
    width: '90%',
  },
  button: {
    borderRadius: '20px',
    margin: '1rem auto',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    textTransform: 'none',
    width: '90%',
  },
  symptomsButtonRoot: {
    borderRadius: '16px',
    color: '#272D40',
    fontSize: '14px',
    margin: '10px 0',
    borderColor: '#E7EFF6!important',
    padding: '12px 0',
    textTransform: 'none',
    width: '100%',
  },
  symptomsButtonSelected: {
    borderRadius: '16px',
    color: '#3B84FF',
    fontSize: '14px',
    margin: '10px 0',
    borderColor: '#2E79FF!important',
    'font-weight': 'bold',
    padding: '12px 0',
    textTransform: 'none',
    width: '100%',
  },
  sliderContainer: {},
  slider: {
    width: '85%',
    color: '#2D74FF',
  },
  container: {
    padding: '0 24px 20px 24px',
    height: '100%',
  },
  price: {
    marginTop: '1.15rem',
  },
  fieldset: {
    width: '100%',
    'margin-top': '20px',
  },
};

const radioStyles = {
  radioActive: {
    color: '#484B4D',
    'font-size': '14px',
    border: '2px solid',
    borderColor: '#2D74FF',
    borderRadius: '16px',
    margin: '5px 0',
    padding: '5px 16px',
    display: 'flex',
  },
  radioInactive: {
    color: '#484B4D',
    'font-size': '14px',
    border: '2px solid',
    borderColor: '#DAE7F2',
    borderRadius: '16px',
    margin: '5px 0',
    padding: '5px 16px',
    display: 'flex',
  },
  radioLabel: {
    width: '85%',
  },
};

const PaymentFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseIconLinkWrapper = styled(Link)`
  position: absolute;
  top: 25px;
  right: 15px;
`;

const TotalToPay = styled.p`
  color: #484b4d;
  font-size: 10px;
  margin: 0;
`;

const TotalToPayValue = styled.p`
  color: #272d40;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 0 0;
`;

const PaymentWrapper = styled.div`
  margin-top: 20px;
`;

const ShippingWrapper = styled.div`
  margin-top: 20px;
`;

const ShippingBoxWrapper = styled.div`
  margin-top: 20px;
  border: 1px solid #dae7f2;
  border-radius: 16px;
  padding: 16px 20px;
`;
const ShippingTextWrapper = styled.p`
  color: #484b4d;
  font-family: 'SF UI Display';
  font-size: 14px;
  letter-spacing: 0;
  line-height: 22px;
`;

const ChangeAddressWrapper = styled.a`
  color: #3b84ff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 22px;
  text-align: center;
`;

const BillingAddressWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const BillingAddressLabel = styled.p`
  color: #484b4d;
  font-size: 14px;
`;

const IOSSwitch = withStyles(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#3B84FF',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#3B84FF',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

class RequestATest extends React.Component {
  state = {
    paymentMethod: 'card',
  };

  setPaymentMethod = e => {
    this.setState({ paymentMethod: e.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <ContainerWrapper>
        <CloseIconLinkWrapper to="/diagnose">
          <CloseIcon />
        </CloseIconLinkWrapper>

        <div>
          <Title24>Check Out</Title24>

          <ShippingWrapper>
            <Title18>Shipping Address</Title18>

            <ShippingBoxWrapper>
              <ShippingTextWrapper>
                64 Dakota Point street,
                <br />
                Cluj-Napoca, Romania 408207
              </ShippingTextWrapper>

              <ChangeAddressWrapper>Change the Address</ChangeAddressWrapper>
            </ShippingBoxWrapper>
          </ShippingWrapper>

          <BillingAddressWrapper>
            <BillingAddressLabel>
              Billing Address same as shipping Address
            </BillingAddressLabel>

            <FormControlLabel
              control={
                <IOSSwitch checked={true} onChange={() => {}} name="checkedB" />
              }
            />
          </BillingAddressWrapper>

          <PaymentWrapper>
            <Title18>Payment Method</Title18>

            <FormControl component="fieldset" className={classes.fieldset}>
              <RadioGroup
                aria-label="payment"
                name="payment"
                defaultValue="card"
              >
                <FormControlLabel
                  value="card"
                  control={<Radio color="primary" />}
                  label="Credit / Debit Card"
                  labelPlacement="start"
                  onClick={this.setPaymentMethod}
                  classes={{
                    root:
                      this.state.paymentMethod === 'card'
                        ? classes.radioActive
                        : classes.radioInactive,
                    label: classes.radioLabel,
                  }}
                ></FormControlLabel>

                <FormControlLabel
                  value="cash"
                  control={<Radio color="primary" />}
                  label="Cash on Delivery"
                  labelPlacement="start"
                  onClick={this.setPaymentMethod}
                  classes={{
                    root:
                      this.state.paymentMethod === 'cash'
                        ? classes.radioActive
                        : classes.radioInactive,
                    label: classes.radioLabel,
                  }}
                ></FormControlLabel>

                <FormControlLabel
                  value="bank"
                  control={<Radio color="primary" />}
                  label="Bank Transfer"
                  labelPlacement="start"
                  onClick={this.setPaymentMethod}
                  classes={{
                    root:
                      this.state.paymentMethod === 'bank'
                        ? classes.radioActive
                        : classes.radioInactive,
                    label: classes.radioLabel,
                  }}
                ></FormControlLabel>
              </RadioGroup>
            </FormControl>
          </PaymentWrapper>
        </div>

        <PaymentFooterWrapper>
          <div>
            <TotalToPay>Total to Pay</TotalToPay>
            <TotalToPayValue>20 €</TotalToPayValue>
          </div>

          <ButtonsWrapper>
            <ButtonBlueFilled
              content="Proceed"
              onClick={() => {
                toastrService.success(
                  'You have successfully purchased a Quick Test Kit'
                );
                this.props.history.push(`/diagnose`);
              }}
            />
          </ButtonsWrapper>
        </PaymentFooterWrapper>
      </ContainerWrapper>
    );
  }
}

export default withRouter(
  withStyles({ ...styles, ...radioStyles })(RequestATest)
);
