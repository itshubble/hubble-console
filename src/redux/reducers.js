import { combineReducers } from "redux";
import * as ActionTypes from "./actionTypes";

function dialogReducer(state = null, action) {
    switch (action.type) {
        case ActionTypes.NEW_ACCOUNT:
        case ActionTypes.NEW_SUBSCRIPTION:
        case ActionTypes.NEW_INVOICE:
        case ActionTypes.NEW_TRANSACTION:
        case ActionTypes.NEW_PLAN:
        case ActionTypes.EDIT_ACCOUNT:
        case ActionTypes.EDIT_PLAN: {
            return action.type;
        }

        case ActionTypes.CLOSE_DIALOG: {
            return null;
        }

        default: {
            return state;
        }
    }
}

function notificationReducer(state = null, action) {
    if (action.type === "SHOW_NOTIFICATION") {
        return {
            message: action.payload.message,
            category: action.payload.category,
        };
    } else if (action.type === "CLOSE_NOTIFICATION") {
        return null;
    }
    return state;
}

function accountsReducer(state = [], action) {
    switch (action.type) {
        case ActionTypes.FETCH_ACCOUNTS_COMPLETE: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}

function accountReducer(state = null, action) {
    switch (action.type) {
        case ActionTypes.FETCH_ACCOUNT_COMPLETE:
        case ActionTypes.EDIT_ACCOUNT: {
            return action.payload;
        }

        case ActionTypes.CLEAR_ACCOUNT: {
            return null;
        }

        default: {
            return state;
        }
    }
}

function subscriptionsReducer(state = [], action) {
    switch (action.type) {
        case ActionTypes.FETCH_SUBSCRIPTIONS_COMPLETE: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}

function planReducer(state = null, action) {
    switch (action.type) {
        case ActionTypes.FETCH_PLAN_COMPLETE:
        case ActionTypes.EDIT_PLAN: {
            return action.payload;
        }

        case ActionTypes.CLEAR_ACCOUNT: {
            return null;
        }

        default: {
            return state;
        }
    }
}

function plansReducer(state = [], action) {
    switch (action.type) {
        case ActionTypes.FETCH_PLANS_COMPLETE: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}

function subscriptionReducer(state = null, action) {
    switch (action.type) {
        case ActionTypes.FETCH_SUBSCRIPTION_COMPLETE: {
            return action.payload;
        }

        case ActionTypes.CLEAR_SUBSCRIPTION: {
            return null;
        }

        default: {
            return state;
        }
    }
}
const rootReducer = combineReducers({
    openDialog: dialogReducer,
    notification: notificationReducer,
    accounts: accountsReducer,
    account: accountReducer,
    subscriptions: subscriptionsReducer,
    subscription: subscriptionReducer,
    plans: plansReducer,
    plan: planReducer,
});

export default rootReducer;
