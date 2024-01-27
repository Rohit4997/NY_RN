package com.nammayatri.JBridge;

// MySharedPreferencesModule.java

import android.content.Context;
import android.content.SharedPreferences;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MySharedPreferencesModule extends ReactContextBaseJavaModule {
    private static final String MODULE_NAME = "MySharedPreferencesModule";

    public MySharedPreferencesModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @ReactMethod
    public void setStringValue(String key, String value) {
        SharedPreferences preferences = getReactApplicationContext().getSharedPreferences("pref_file", Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = preferences.edit();
        editor.putString(key, value);
        editor.apply();
    }

    @ReactMethod
    public void getStringValue(String key, Promise promise) {
        SharedPreferences sharedPreferences = getReactApplicationContext().getSharedPreferences("pref_file", Context.MODE_PRIVATE);
        System.out.println("zxc getStringValue2 " + sharedPreferences.getString(key, ""));
        promise.resolve(sharedPreferences.getString(key, ""));
    }
}
