/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Foodies Full App Flutter
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import 'package:get/get.dart';
import 'package:foodies_vendors/app/controller/add_category_controller.dart';

class AddCategoryBinding extends Bindings {
  @override
  void dependencies() async {
    Get.lazyPut(
      () => AddCategoryController(parser: Get.find()),
    );
  }
}
