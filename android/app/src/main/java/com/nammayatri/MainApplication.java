package com.nammayatri;

import android.app.Application;
import android.content.Context;
import android.content.SharedPreferences;

import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactNativeHost;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.nammayatri.JBridge.MySharedPreferencesPackage;
import com.swmansion.rnscreens.RNScreensPackage;
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new DefaultReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

          @Override
          protected List<ReactPackage> getPackages() {
              return Arrays.<ReactPackage>asList(
                      new SafeAreaContextPackage(),
                      new RNScreensPackage(),
                      new MainReactPackage(),
                      // Add your custom package here
                      new MySharedPreferencesPackage()
              );
          }

//          @Override
//          protected List<ReactPackage> getPackages() {
//              @SuppressWarnings("UnnecessaryLocalVariable")
//              List<ReactPackage> packages = new PackageList(this).getPackages();
//              // Packages that cannot be autolinked yet can be added manually here, for example:
//              // packages.add(new MyReactNativePackage());
//
//              return packages;
//          }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }

        @Override
        protected boolean isNewArchEnabled() {
          return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
        }

        @Override
        protected Boolean isHermesEnabled() {
          return BuildConfig.IS_HERMES_ENABLED;
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }


  @Override
  public void onCreate() {
    super.onCreate();
    updateConfigURL();
    SoLoader.init(this, /* native exopackage */ false);
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      DefaultNewArchitectureEntryPoint.load();
    }
    ReactNativeFlipper.initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }

    private void updateConfigURL() {
        String merchantId = com.nammayatri.BuildConfig.MERCHANT_ID;
        String baseUrl = com.nammayatri.BuildConfig.BASE_URL;
        SharedPreferences sharedPreferences = getSharedPreferences("pref_file", Context.MODE_PRIVATE);
        sharedPreferences.edit().putString("MERCHANT_ID", merchantId)
                .putString("BASE_URL", baseUrl)
                .apply();
    }


//    @Override
//    protected List<ReactPackage> getPackages() {
//        return Arrays.<ReactPackage>asList(
//                new MainReactPackage(),
//                // Add your custom package here
//                new MySharedPreferencesPackage()
//        );
//    }
}
