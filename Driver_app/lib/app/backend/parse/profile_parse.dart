/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Foodies Full App Flutter
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import 'package:foodies_driver/app/backend/api/api.dart';
import 'package:foodies_driver/app/helper/shared_pref.dart';
import 'package:foodies_driver/app/util/constant.dart';
import 'package:get/get.dart';

class ProfileParse {
  final SharedPreferencesManager sharedPreferencesManager;
  final ApiService apiService;

  ProfileParse(
      {required this.sharedPreferencesManager, required this.apiService});

  String getCover() {
    return sharedPreferencesManager.getString('cover') ?? '';
  }

  String getFirstName() {
    return sharedPreferencesManager.getString('first_name') ?? '';
  }

  String getLastName() {
    return sharedPreferencesManager.getString('last_name') ?? '';
  }

  String getEmail() {
    return sharedPreferencesManager.getString('email') ?? '';
  }

  Future<Response> logout() async {
    return await apiService.logout(
        AppConstants.logout, sharedPreferencesManager.getString('token') ?? '');
  }

  void clearAccount() {
    sharedPreferencesManager.clearKey('first_name');
    sharedPreferencesManager.clearKey('last_name');
    sharedPreferencesManager.clearKey('token');
    sharedPreferencesManager.clearKey('uid');
    sharedPreferencesManager.clearKey('email');
    sharedPreferencesManager.clearKey('cover');
  }
}
