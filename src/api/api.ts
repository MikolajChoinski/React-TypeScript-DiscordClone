import {API_CONFIG} from "./api.config.ts";
import axios from "axios";

export const api = axios.create(API_CONFIG);